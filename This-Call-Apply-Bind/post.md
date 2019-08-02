Before diving into the specifics of the `this` keyword in JavaScript, it’s important to take a step back and first look at why the `this` keyword exists in the first place. The `this` keyword allows you to reuse functions with different contexts. Said differently, **the “this” keyword allows you to decide which object should be focal when invoking a function or a method.** Everything we talk about after this will build upon that idea. We want to be able to reuse functions or methods in different contexts or with different objects.

The first thing we’ll look at is how to tell what the `this` keyword is referencing. The first and most important question you need to ask yourself when you’re trying to answer this question is **“Where is this function being invoked?**”. The **only** way you can tell what the `this` keyword is referencing is by looking at where the function using the `this` keyword was invoked.

To demonstrate this with an example you’re already familiar with, say we had a `greet` function that took in a name an alerted a welcome message.

```javascript

function greet (name) {
    alert(`Hello, my name is ${name}.`)
}

```

If I were to ask you exactly `what` greet was going to alert, what would your answer be? Given only the function definition, it’s impossible to know. In order to know what `name` is, you’d have to look at the function invocation of `greet`.

```javascript

greet('Paul')

```

It’s the exact same idea with figuring out what the `this` keyword is referencing. You can even think about the `this` keyword as you would a normal argument to a function - it’s going to change based on how the function is invoked.

Now that you know the first step to figuring out what the `this` keyword is referencing is to look at where the function is being invoked, what’s next? To help us with the next step, we’re going to establish 5 rules or guidelines.

>1. Implicit Binding
>2. Explicit Binding
>3. new Binding
>4. Lexical Binding
>5. window Binding

## Implicit Binding

Remember, the goal here is to be able to look at a function definition using the `this` keyword and tell what `this` is referencing. The first and most common rule for doing that is called the `Implicit Binding`. I’d say it’ll tell you what the `this` keyword is referencing about 80% of the time.

Let’s say we had an object that looked like this

```javascript

const user = {
  name: 'Tyler',
  age: 27,
  greet() {
    alert(`Hello, my name is ${this.name}`)
  }
}

```

Now, if you were to invoke the `greet` method on the `user` object, you’d do so be using dot notation.

```javascript

user.greet()

```

This brings us to the main key point of the implicit binding rule. In order to figure out what the `this` keyword is referencing, first, **look to the left of the dot when the function is invoked**. If there is a “dot”, look to the left of that dot to find the object that the `this` keyword is referencing.

In the example above, `user` is to “the left of the dot” which means the `this` keyword is referencing the `user` object. So, it’s **as if**, inside the `greet` method, the JavaScript interpreter changes `this` to `user`.

```javascript

greet() {
  // alert(`Hello, my name is ${this.name}`)
  alert(`Hello, my name is ${user.name}`) // Tyler
}

```

Let’s take a look at a similar, but a slightly more advanced example. Now, instead of just having a `name`, `age`, and `greet` property, let’s also give our user object a `mother` property which also has a `name` and `greet` property.

```javascript

const user = {
  name: 'Tyler',
  age: 27,
  greet() {
    alert(`Hello, my name is ${this.name}`)
  },
  mother: {
    name: 'Stacey',
    greet() {
      alert(`Hello, my name is ${this.name}`)
    }
  }
}

```

Now the question becomes, what is each invocation below going to alert?

```javascript

user.greet()
user.mother.greet()

```

Whenever we’re trying to figure out what the `this` keyword is referencing we need to look to the invocation and see what’s to the “left of the dot”. In the first invocation, `user` is to the left of the dot which means `this` is going to reference `user`. In the second invocation, `mother` is to the left of the dot which means `this` is going to reference `mother`.

```javascript

user.greet() // Tyler
user.mother.greet() // Stacey

```

As mentioned earlier, about 80% of the time there will be an object to the “left of the dot”. That’s why the first step you should take when figuring out what the `this` keyword is referencing is to “look to the left of the dot”. But, what if there is no dot? This brings us to our next rule -

## Explicit Binding

Now, what if instead of our `greet` function being a method on the `user` object, it was just its own standalone function.

```javascript

function greet () {
  alert(`Hello, my name is ${this.name}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}

```

We know that in order to tell what the `this` keyword is referencing we first have to look at where the function is being invoked. Now, this brings up the question, how can we invoke `greet` but have it be invoked with the `this` keyword referencing the `user` object. We can’t just do `user.greet()` like we did before because `user` doesn’t have a `greet` method. In JavaScript, every function contains a method which allows you to do exactly this and that method is named `call`.

>“call” is a method on every function that allows you to invoke the function specifying in what context the function will be invoked.

With that in mind, we can invoke `greet` in the context of `user` with the following code -

```javascript

greet.call(user)

```

Again, `call` is a property on every function and the first argument you pass to it will be the context (or the focal object) in which the function is invoked. In other words, the first argument you pass to call will be what the `this` keyword inside that function is referencing.

This is the foundation of rule #2 (Explicit Binding) because we’re explicitly (using `.call`), specifying what the `this` keyword is referencing.

Now let’s modify our `greet` function just a little bit. What if we also wanted to pass in some arguments? Say along with their name, we also wanted to alert what languages they know. Something like this

```javascript

function greet (l1, l2, l3) {
  alert(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}

```

Now to pass arguments to a function being invoked with `.call`, you pass them in one by one after you specify the first argument which is the context.

```javascript

function greet (l1, l2, l3) {
  alert(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet.call(user, languages[0], languages[1], languages[2])

```
This works and it shows how you can pass arguments to a function being invoked with `.call`. However, as you may have noticed, it’s a tad annoying to have to pass in the arguments one by one from our `languages` array. It would be nice if we could just pass in the whole array as the second argument and JavaScript would spread those out for us. Well good news for us, this is exactly what `.apply` does. `.apply` is the exact same thing as `.call`, but instead of passing in arguments one by one, you can pass in a single array and it will spread each element in the array out for you as arguments to the function.

So now using `.apply`, our code can change into this (below) with everything else staying the same.

```javascript

const languages = ['JavaScript', 'Ruby', 'Python']

// greet.call(user, languages[0], languages[1], languages[2])
greet.apply(user, languages)

```

So far under our “Explicit Binding” rule we’ve learned about `.call` as well as `.apply` which both allow you to invoke a function, specifying what the `this` keyword is going to be referencing inside of that function. The last part of this rule is `.bind`. `.bind` is the exact same as `.call` but instead of immediately invoking the function, it’ll return a new function that you can invoke at a later time. So if we look at our code from earlier, using `.bind`, it’ll look like this

```javascript

function greet (l1, l2, l3) {
  alert(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

const newFn = greet.bind(user, languages[0], languages[1], languages[2])
newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"

```

## new Binding

The third rule for figuring out what the `this` keyword is referencing is called the `new` binding. If you’re unfamiliar with the `new` keyword in JavaScript, whenever you invoke a function with the `new` keyword, under the hood, the JavaScript interpreter will create a brand new object for you and call it `this`. So, naturally, if a function was called with `new`, the `this` keyword is referencing that new object that the interpreter created.

```javascript

function User (name, age) {
  /*
    Under the hood, JavaScript creates a new object called `this`
    which delegates to the User's prototype on failed lookups. If a
    function is called with the new keyword, then it's this new object that interpreter created that the this keyword is referencing.
  */

  this.name = name
  this.age = age
}

const me = new User('Tyler', 27)

```

## Lexical Binding

At this point, we’re on our 4th rule and you may be feeling a bit overwhelmed. That’s fair. The `this` keyword in JavaScript is arguably more complex than it should be. Here’s the good news, this next rule is the most intuitive.

Odds are you’ve heard of and used an arrow function before. They’re new as of ES6. They allow you to write functions in a more concise format.

```javascript

friends.map((friend) => friend.name)

```
