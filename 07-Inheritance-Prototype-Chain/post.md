Previously we learned how to create an `Animal` class both in ES5 as well as in ES6.  We also learned how to share methods across those classes using Javascript's prototype.  To review, here's the code we saw in an earlier post.

---

```javascript

function Animal (name, energy) {
  this.name = name
  this.energy = energy
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

const leo = new Animal('Leo', 7)

```

---

```javascript

class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep() {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  play() {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

const leo = new Animal('Leo', 7)

```

---

Now let's say we wanted to start making individual classes for the specific animals.  For example, what if we wanted to start making a bunch of dog instances.  What properties and methods will these dogs have?  Well, similar to our `Animal` class, we could give each dog a `name`, an `energy` level, and the ability to `eat`, `sleep`, and `play`.  Unique to our `Dog` class, we could also give them a `breed` property as well as the ability to `bark`.  In ES5, our `Dog` class could look something like this

```javascript

function Dog (name, energy, breed) {
  this.name = name
  this.energy = energy
  this.breed = breed
}

Dog.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

Dog.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Dog.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

Dog.prototype.bark = function () {
  console.log('Woof-Woof!')
  this.energy -= .1
}

const charlie = new Dog('Charlie', 10, 'Goldendoodle')

```

Alright, well... we just recreated the `Animal` class and added a few new properties to it.  If we wanted to create another animal, say a `Cat`, at shi point we'd again have to create a `Cat` class, duplicate all the common logic located in the `Animal` class to it, then add on `Cat` specific properties just like we did with the `Dog` class.  In fact, we'd have to do this for each different type of animal we created.

```javascript

function Dog (name, energy, breed) {}

function Cat (name, energy, declawed) {}

function Giraffe (name, energy, height) {}

function Monkey (name, energy, domesticated) {}

```

This work, but it seems wasteful.  The `Animal` class is the perfect base class.  What it means is that it has all the properties that each one of our animals has in common.  Whether we're creating a dog, cat, giraffe, or monkey, all of them will have a `name`, `energy` level, and the ability to `eat`, `sleep`, and `play`.  With that said, is there a way we can utilize the `Animal` class whenever we create the individual classes for each different animal?  Let's try it out.  I'll paste the `Animal` class again below for easy reference.

```javascript

function Animal (name, energy) {
  this.name = name
  this.energy = energy
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

function Dog (name, energy, breed) {

}

```

What are some things we know about the `Dog` constructor function above?

First, we know it takes 3 arguments, `name`, `energy`, and `breed`.

Second, we know it’s going to be called with the `new` keyword so we’ll have a `this` object.

And third, we know we need to utilize the `Animal` function so that any instance of dog will have a `name`, `energy` level, and be able to `eat`, `sleep`, and `play`.

It’s the third one that’s the tricky one. The way you “utilize” a function is by calling it. So we know that inside of `Dog`, we want to call `Animal`. What we need to figure out though is how we can invoke `Animal` in the context of `Dog`. What that means is that we want to call `Animal` with the `this` keyword from `Dog`. If we do that correctly, then `this` inside of the `Dog` function will have all the properties of `Animal` (`name`, `energy`). If you remember from a [previous section](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/), every function in JavaScript has a `.call` method on it.

>.call() is a method on every function that allows you to invoke the function specifying in what context the function will be invoked.

This sounds like exactly what we need.  We want to invoke `Animal` in the context of `Dog`.

```javascript

function Dog (name, energy, breed) {
  Animal.call(this, name, energy)

  this.breed = breed
}

const charlie = new Dog('Charlie', 10, 'Goldendoodle')

charlie.name // Charlie
charlie.energy // 10
charlie.breed // Goldendoodle

```

Solid, we’re half-way there. You’ll notice in the code above that because of this line `Animal.call(this, name, energy)`, every instance of `Dog` will now have a `name` and `energy` property. Again, the reason for that is because it’s as if we ran the `Animal` function with the `this` keyword generated from `Dog`. Then after we added a `name` and `energy` property to `this`, we also added a `breed` property just as we normally would.

Remember the goal here is to have each instance of `Dog` have not only all the properties of `Animal`, but also all the methods as well. If you run the code above, you’ll notice that if you try to run `charlie.eat(10)` you’ll get an error. Currently, every instance of `Dog` will have the properties of `Animal` (`name` and `energy`), but we haven’t done anything to make sure that they also have the methods (`play`, `eat`, `sleep`).

Let’s think about how we can solve this. We know that all the `Animal`'s methods are located on `Animal.prototype`. What that means is we somehow want to make sure that all instances of `Dog` will have access to the methods on `Animal.prototype`. What if we used our good friend `Object.create` here? If you’ll remember, Object.create allows you to create an object which will delegate to another object on failed lookups. So in our case, the object we want to create is going to be `Dog`'s prototype and the object we want to delegate to on failed lookups is `Animal.prototype`.

```javascript

function Dog (name, energy, breed) {
    Animal.call(this, name, energy)

    this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)

```

Now, whenever there’s a failed lookup on an instance of `Dog`, JavaScript will delegate that lookup to `Animal.prototype`. If this is still a little fuzzy, re-read [A Beginner’s Guide to JavaScript’s Prototype](http://tylermcginnis.com/beginners-guide-to-javascript-prototype/) where we talk all about `Object.create` and JavaScript’s prototype.

Let’s look at the full code together then we’ll walk through what happens.

```javascript

function Animal (name, energy) {
  this.name = name
  this.energy = energy
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

function Dog (name, energy, breed) {
  Animal.call(this, name, energy)

  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)

```

Now we've created our base class ( `Animal` ) as well as our subclass ( `Dog` ), let's see what it looks like under the hood when we create an instance of `Dog`.

```javascript

const charlie = new Dog('Charlie', 10, 'Goldendoodle')

charlie.name // Charlie
charlie.energy // 10
charlie.breed // Goldendoodle

```

Nothing fancy so far, but let's look at what happens when we invoke a method located on `Animal`.

```javascript

charlie.eat(10)

/*
1) JavaScript checks if charlie has an eat property - it doesn't.
2) JavaScript then checks if Dog.prototype has an eat property
    - it doesn't.
3) JavaScript then checks if Animal.prototype has an eat property
    - it does so it calls it.
*/

```

The reason `Dog.prototype` gets checked is because when we created a new instance of `Dog`, we used the `new` keyword.  Under the hood, the `this` object that was created for us delegates to `Dog.prototype` (seen in comments below).

```javascript

function Dog (name, energy, breed) {
  // this = Object.create(Dog.prototype)
  Animal.call(this, name, energy)

  this.breed = breed
  // return this
}

```

The reason `Animal.prototype` gets checked is because we overwrote `Dog.prototype` to delegate to `Animal.prototype` on failed lookups with this line

```javascript

Dog.prototype = Object.create(Animal.prototype)

```
Now one thing we haven't talked about is what if `Dog` has its own methods?  Well, that's a simple solution.  Just like with `Animal`, if we want to sahre a method across all instances of that class, we add it to the function's prototype.

```javascript

function Dog (name, energy, breed) {
  Animal.call(this, name, energy)

  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.bark = function () {
  console.log('Woof Woof!')
  this.energy -= .1
}

```

👌 very nice. There’s just one small addition we need to make. If you remember back to the [Beginner’s Guide to JavaScript’s Prototype](http://tylermcginnis.com/beginners-guide-to-javascript-prototype/) post, we were able to get access to the instances’ constructor function by using `instance.constructor`.

```javascript

function Animal (name, energy) {
    this.name = name
    this.energy = energy
}

const leo = new Animal('Leo', 7)
console.log(leo.constructor) // Logs the constructor function

```

