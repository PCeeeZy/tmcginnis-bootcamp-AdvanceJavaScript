.prototype is just an attribute of all functions that returns an object.  Because of this we can use `Object.create()` and pass in the prototype method so that all instances inherit the methods.

This is an example of Object.create() in action.

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

And here as prototypal instantation.

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

But JS has made this even easier with the use of the `new` keyword.

```javascript

function Animal (name, energy) {
  // const this = Object.create(Animal.prototype)

  this.name = name
  this.energy = energy

  // return this
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)

```

So now the constructor no longer needs to have the `Object.create()` it is assumed and automatically initiated.  Same with the `return`.

So the new tells JS to create an object called `this` and delegates on failed lookups to the function's prototype and then implicitly return it.

This is great and all but we can better this even further by using Classes.

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
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)

```

Understanding this means we can have a better understanding of whats happening when we have something as simple as

```javascript

const friends = []

```

What's really happening is

```javascript

const friends = new Array()

```

```javascript

console.log(Array.prototype)

/*
  concat: ƒn concat()
  constructor: ƒn Array()
  copyWithin: ƒn copyWithin()
  entries: ƒn entries()
  every: ƒn every()
  fill: ƒn fill()
  filter: ƒn filter()
  find: ƒn find()
  findIndex: ƒn findIndex()
  forEach: ƒn forEach()
  includes: ƒn includes()
  indexOf: ƒn indexOf()
  join: ƒn join()
  keys: ƒn keys()
  lastIndexOf: ƒn lastIndexOf()
  length: 0n
  map: ƒn map()
  pop: ƒn pop()
  push: ƒn push()
  reduce: ƒn reduce()
  reduceRight: ƒn reduceRight()
  reverse: ƒn reverse()
  shift: ƒn shift()
  slice: ƒn slice()
  some: ƒn some()
  sort: ƒn sort()
  splice: ƒn splice()
  toLocaleString: ƒn toLocaleString()
  toString: ƒn toString()
  unshift: ƒn unshift()
  values: ƒn values()
*/

```

So we know that `Array` is a class and methods like `.concat`, `.slice`, `.pop` are all just prototypes of the `Array` class and they are implicitly added with the `new` keyword.

Similarly with objects, alll objects will delegate to `Object.prototype` on failed lookups which is why all objects have methods like `toString` and `hasOwnProperty`.

Very cool.

---

If we ever want to find out what an object is an prototype instance of, we can use `Object.getPrototypeOf(desiredObject)`.

```javascript

const prototype = Object.getPrototypeOf(leo)

console.log(prototype)
/* {constructor: ƒ, eat: ƒ, sleep: ƒ, play: ƒ}
constructor: class Animal
eat: ƒ eat(amount)
play: ƒ play(length)
sleep: ƒ sleep(length)
__proto__: Object */

```

Interestingly if we want to console log all the keys and values of `leo` we could use a `for in` loop.

```javascript

for (let key in leo) {
    console.log(`Key: ${key}.  Value: ${leo[key]}`)
}

```

Which will return:

```javascript

Key: name. Value: Leo
Key: energy. Value: 7
Key: eat. Value: function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}
Key: sleep. Value: function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}
Key: play. Value: function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

```

A `for in` loop is going to loop over all of the **enumerable properties** on both the object itself as well as the prototype it delegates to. Because by default any property you add to the function’s prototype is enumerable, we see not only `name` and `energy`, but we also see all the methods on the prototype - `eat`, `sleep`, and `play`.

---

`hasOwnProperty` is a property on every object that returns a boolean indicating whether the object has the specified property as its own property rather than on the prototype the object delegates to.

```javascript

...

const leo = new Animal('Leo', 7)

for(let key in leo) {
  if (leo.hasOwnProperty(key)) {
    console.log(`Key: ${key}. Value: ${leo[key]}`)
  }
}

```

And now what we see are only the properties that are on the `leo` object itself rather than on the prototype `leo` delegates to as well.

```javascript

Key: name. Value: Leo
Key: energy. Value: 7

```

---

##Arrow Functions
Arrow functions don’t have their own `this` keyword. As a result, arrow functions can’t be constructor functions and if you try to invoke an arrow function with the `new` keyword, it’ll throw an error.

```javascript

const Animal = () => {}

const leo = new Animal() // Error: Animal is not a constructor

```

Also, because we demonstrated above that the pseudo-classical pattern can’t be used with arrow functions, arrow functions also don’t have a `prototype` property.

```javascript

const Animal = () => {}
console.log(Animal.prototype) // undefined

```