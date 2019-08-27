You can’t get very far in JavaScript without dealing with objects. They’re foundational to almost every aspect of the JavaScript programming language. In fact, learning how to create objects is probably one of the first things you studied when you were starting out. With that said, in order to most effectively learn about prototypes in JavaScript, we’re going to channel our inner Jr. developer and go back to the basics.

Objects are key/value pairs. The most common way to create an object is with curly braces `{}` and you add properties and methods to an object using dot notation.

```javascript

let animal = {}
animal.name = 'Leo'
animal.energy = 10

animal.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

animal.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

animal.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

```

Simple. Now odds are in our application we’ll need to create more than one animal. Naturally, the next step for this would be to encapsulate that logic inside of a function that we can invoke whenever we needed to create a new animal. We’ll call this pattern `Functional Instantiation` and we’ll call the function itself a “constructor function” since it’s responsible for “constructing” a new object.

## Functional Instantation

```javascript

function Animal (name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy

  animal.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }

  animal.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }

  animal.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }

  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

```

> `"I thought this was an Advanced JavaScript course...?" - Your brain.`
> **It is. We’ll get there.**

Now whenever we want to create a new animal (or more broadly speaking a new “instance”), all we have to do is invoke our `Animal` function, passing it the animal’s `name` and `energy` level. This works great and it’s incredibly simple. However, can you spot any weaknesses with this pattern? The biggest and the one we’ll attempt to solve has to do with the three methods - `eat`, `sleep`, and `play`. Each of those methods are not only dynamic, but they’re also completely generic. What that means is that there’s no reason to re-create those methods as we’re currently doing whenever we create a new animal. We’re just wasting memory and making each animal object bigger than it needs to be. Can you think of a solution? What if instead of re-creating those methods every time we create a new animal, we move them to their own object then we can have each animal reference that object? We can call this pattern `Functional Instantiation with Shared Methods`, wordy but descriptive.

## Functional Instantation with Shared Methods

```javascript

const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  },
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

function Animal (name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy
  animal.eat = animalMethods.eat
  animal.sleep = animalMethods.sleep
  animal.play = animalMethods.play

  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

```

By moving the shared methods to their own object and referencing that object inside of our `Animal` function, we’ve now solved the problem of memory waste and overly large animal objects.

## Object.create

Let’s improve our example once again by using `Object.create`. Simply put, **Object.create allows you to create an object which will delegate to another object on failed lookups**. Put differently, Object.create allows you to create an object and whenever there’s a failed property lookup on that object, it can consult another object to see if that other object has the property. That was a lot of words. Let’s see some code.

```javascript

const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7

console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish

```

So in the example above, because `child` was created with `Object.create(parent)`, whenever there’s a failed property lookup on `child`, JavaScript will delegate that look up to the `parent` object. What that means is that even though child doesn’t have a `heritage` property, `parent` does so when you log `child.heritage` you’ll get the `parent's` heritage which was `Irish`.

Now with `Object.create` in our tool shed, how can we use it in order to simplify our `Animal` code from earlier? Well, instead of adding all the shared methods to the animal one by one like we’re doing now, we can use Object.create to delegate to the `animalMethods` object instead. To sound really smart, let’s call this one `Functional Instantiation with Shared Methods and Object.create` 🙃

## Functional Instantation with Shared Methods and Object.create

```javascript

const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  },
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

function Animal (name, energy) {
  let animal = Object.create(animalMethods)
  animal.name = name
  animal.energy = energy

  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)

```

📈 So now when we call `leo.eat`, JavaScript will look for the `eat` method on the `leo` object. That lookup will fail, then, because of Object.create, it’ll delegate to the `animalMethods` object which is where it’ll find `eat`.

So far, so good. There are still some improvements we can make though. It seems just a tad “hacky” to have to manage a separate object (`animalMethods`) in order to share methods across instances. That seems like a common feature that you’d want to be implemented into the language itself. Turns out it is and it’s the whole reason you’re here - `prototype`.

So what exactly is `prototype` in JavaScript? Well, simply put, every function in JavaScript has a `prototype` property that references an object. Anticlimactic, right? Test it out for yourself.

```javascript

function doThing () {}
console.log(doThing.prototype) // {}

```

What if instead of creating a separate object to manage our methods (like we’re doing with `animalMethods`), we just put each of those methods on the `Animal` function’s prototype? Then all we would have to do is instead of using Object.create to delegate to `animalMethods`, we could use it to delegate to `Animal.prototype`. We’ll call this pattern `Prototypal Instantiation`.

## Prototypal Instantation

```javascript

function Animal (name, energy) {
  let animal = Object.create(Animal.prototype)
  animal.name = name
  animal.energy = energy

  return animal
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)

```

👏👏👏 Hopefully, you just had a big “aha” moment. Again, `prototype` is just a property that every function in JavaScript has and, as we saw above, it allows us to share methods across all instances of a function. All our functionality is still the same but now instead of having to manage a separate object for all the methods, we can just use another object that comes built into the `Animal` function itself, `Animal.prototype`.

---

## Let's. Go. Deeper
At this point we know three things:

>1. How to create a constructor function.
>2. How to add methods to the constructor function's prototype.
>3. How to use Object.create to delegate failed lookups to the function's prototype.

Those three tasks seem pretty foundational to any programming language. Is JavaScript really that bad that there’s no easier, “built-in” way to accomplish the same thing? As you can probably guess at this point there is, and it’s by using the `new` keyword.

What’s nice about the slow, methodical approach we took to get here is you’ll now have a deep understanding of exactly what the `new` keyword in JavaScript is doing under the hood.

Looking back at our `Animal` constructor, the two most important parts were creating the object and returning it. Without creating the object with `Object.create`, we wouldn’t be able to delegate to the function’s prototype on failed lookups. Without the `return` statement, we wouldn’t ever get back the created object.

```javascript

function Animal (name, energy) {
  let animal = Object.create(Animal.prototype)
  animal.name = name
  animal.energy = energy

  return animal
}

```