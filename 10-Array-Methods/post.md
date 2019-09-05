As JavaScript developers, we're constantly dealing with Arrays.  The most impactful skillset you can master in regards to Arrays in JavaScript is getting comfortable with most of the methods on `Array.prototype`.  This post is a collection of Array methods I think are crucial to know if you're a JavaScript developer.

---

##.concat
Used to merge two or more arrays.  What's nice about `concat` is it doesn't mutate the original array but instead returns a new array.

```javascript

const oldFriends = ['Jake', 'Mikenzi', 'Jessica']
const newFriends = ['Merrick', 'Cash']

const friends = oldFriends.concat(newFriends)

oldFriends // Jake, Mikenzi, Jessica
newFriends // Merrick, Cash
friends // Jake, Mikenzi, Jessica, Merrick, Cash

```

Because `concat` doesn't modify the original array and instead returns a new array, it's commonly used in React apps, Redux apps, or anywhere else mutations are frowned upon.

```javascript

addFriend(friend) {
  this.setState((prevState) => ({
    friends: prevState.concat([friend])
  }))
}

```

---

##.every
Used to determine if **every** element in an array passes a test specified by a given function.  The function passed to `every` gets invoked once for each element in the array.  As soon as that function returns a falsy value, `every` will stop executing and return `false`.  If the function passed to `every` never returns a falsy value, then `every` will return true.

```javascript

const ages = [18,21,28,34,22]

const groupCanVote = ages.every((age) => {
  return age >= 18
})

const groupCanDrink = ages.every((age) => {
  return age >= 21
})

console.log(groupCanVote) // true
console.log(groupCanDrink) // false

```

---

##.fill
Defined, `fill` "fills all the elements of an array from a start index to an end index with a static value."  It sounds pretty useless, but I've found one scenario where it's pretty helpful.

As you start to make your code more functional, you naturally start to avoid using regular for loops in favor of `.map`, `.forEach`, etc.  Let's say our use case was we wanted to execute a function an arbitrary amount of times, say 10.  How could we do this and avoid using a for loop?  Your first intuition might be to use an Array constructor with `.map`.

```javascript

Array(10).map(() => {
    return doThing()
})

```
You'll notice if you run that code it won't work.  When you do `Array(10)` you're creating an array of 10 unset or `empty` values.  When you use any of the array methods, they won't work on an array with empty values.  This is where `.fill` comes into play.  If you do `Array(10).fill()`, you'll then get an array with 10 `undefined`, not empty items.

```javascript

Array(10).fill().map(() => {
    return doThing()
})

```

Not *super* useful, but good to know it exists if you need it.

---

##.filter
Creates a new array after filtering out elements that don't pass a test specified by a given function.

```javascript

const tweets = [
  { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
  { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
  { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
  { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]

const popularTweets = tweets.filter((tweet) => {
  return tweet.stars > 50
})

```

`filter` is popular in React and Redux code bases (or anywhere where immutability is required) since it doesn't modify the original array, instead, it returns a new array.

```javascript

removeItem(index) {
  this.setState((prevState) => ({
    todos: prevState.todos.filter((item, i) => i !== index)
  }))
}

```

---

##.find
Allows you to `find` the first element in an array which satisfies a test specified by a given function.

```javascript

const tweets = [
  { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
  { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
  { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
  { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]

const tweet = tweets.find((t) => t.id === 3)

console.log(tweet) // {id: 3, stars: 51, text: "Clean code is subjective. Optimize for deletion."}

```

---

##.findIndex
Similar to `.find` but instead of returning the element, it returns the index where the element is located.

```javascript

const tweets = [
  { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
  { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
  { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
  { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]

const index = tweets.findIndex((t) => t.id === 3)

console.log(index) // 2

```

---

##.forEach
Invokes a provided function once for each item in the array.  Note `.forEach` is similar to `.map` except `.map` returns a new array, `.forEach` has no return value.  Generally, you can use `forEach` as a replacement for a for loop.

```javascript

const friends = ['Jake', 'Mikenzi', 'Jacob']

friends.forEach((friend) => addToDOM(friend))

```

---

##.includes
Determines if a particular value is found in an array.  Note: We used to use `indexOf` for this same behavior but as of ES6, `includes` is more intuitive.

```javascript

const friends = ['Jake', 'Mikenzi', 'Jacob']

friends.includes('Jake') // true
friends.includes('Karl') // false

```

##.indexOf
Returns the index of a particular value.  If that value doesn't exist in the array, it returns -1.

```javascript

const friends = ['Jake', 'Mikenzi', 'Jacob']

friends.indexOf('Jake') // 0
friends.indexOf('Karl') // -1

```

##.join
Turns (or joins) all elements of an array into a string and returns it.  By default, when converted into a string, each item in the array will be seperated by a comma.  You can change that by passing in a custom separator as the first argument.

```javascript

const splitSentence = ['learn', 'react', 'at', 'tylermcginnis.com']

splitSentence.join() // learn,react,at,tylermcginnis.com
splitSentence.join(' ') // learn react at tylermcginnis.com

```

---

##.map
Creates a new array with the result of calling a provided function on every element in the original array.  When should you use `.map`?  I use it when I need to create a new array, based on a previous array.  In the example below, I want to create a new array, `tweedIds`, based on the original array, `tweets`.

```javascript

const tweets = [
  { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
  { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
  { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
  { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]

const tweetIds = tweets.map((tweet) => tweet.id) // [1,2,3,4]

```

In react, `.map` is used a lot along with JSX to create an unordered list.

```javascript

render () {
  return (
    <ul>
      {this.state.todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>
      })}
    </ul>
  )
}

```

---

##.pop
Removes the last element from an array and returns it.  Favor using `.filter` instead of `.pop` as mutations are 👺.

```javascript

const friends = ['Jake', 'Mikenzi', 'Karl']

const removedFriend = friends.pop()

console.log(removedFriend) // Karl
console.log(friends) // ['Jake', 'Mikenzi']

```

---

##.push
Adds an item to the end of the array and returns the array’s new length. Favor using `.concat` instead of `.push` as mutations are 👺.

```javascript

const friends = ['Jake', 'Mikenzi']

friends.push('Jordyn') // 3

console.log(friends) ['Jake', 'Mikenzi', 'Jordyn']

```

##.reduce
`.reduce` holds the keys to the universe.  If you master it, you'll be able to do pretty much anything you want with arrays.  Before you even look at the API, it's important to understand why `.reduce` exists.  The idea of `.reduce` is that you can take an array and transform it into anything else - another array, an object, an integer, literally anything.  Why would you ever want to do that?  Look at every single example on this whole page.  In each one, we're taking an array and transforming it in some way - mostly to another array.  Let's look at some other common ways you'd transform an array.

```text

[1,2,3] -> sum-> 6

---

[
 { name: 'Tyler', age: 28},
 { name: 'Mikenzi', age: 26},
 { name: 'Blaine', age: 30 }
] -> Just the names -> ['Tyler', 'Mikenzi', 'Blaine']

---

[
 { name: 'Tyler', age: 28},
 { name: 'Mikenzi', age: 26},
 { name: 'Blaine', age: 30 }
] -> Length and age count -> { users: 3, ageTotal: 84}

---

[
  { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
  { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
  { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
  { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]
  -> Remove the stars property ->
[
  { id: 1, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
  { id: 2, text: 'Tech conferences are too expensive.' },
  { id: 3, text: 'Clean code is subjective. Optimize for deletion.' },
  { id: 4, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]

```

Here's how I think about whether i should use `.reduce` or not.

```text

1) Am I transforming an array into another array
just by removing some elements? Use .filter

2) Am I transforming an array into another array? Use .map

3) Am I transforming an array into something other than another array? Use .reduce

```

Now that we understand what `.reduce` is used for, let's take a look at the API.  Don't worry if this is confusing, with great power comes great initial confusion.  [Google "reduce JavaScript"](https://lmgtfy.com/?q=reduce+Javascript) and read the first two pages of results.  It'll be worth it - promise.

I'll first show you how to accomplish our goal of summing up an array of numbers into a single integer, then we'll walk through it.

```javascript

function sum (arr) {
  return arr.reduce((total, num) => {
    return total + num
  }, 0)
}

sum([1,2,3]) // 6
sum([5,5,5]) // 15

```

Remember, the goal here is to take the array that's being passed into the `sum` function and transform it into a single integer, which is the summation of all the numbers in the array.

The first thing you'll notice is that we pass `.reduce` two arguments.  The first is a function that will be invoked for every element in the array.  The second is what we'll call the "initial value".  In our example, because we're adding all the numbers together, we want the initial value to be 0 (so we don't run into any NaN problems).  If we were creating a new object, the initial value would be an empty object.  If we were creating an array, it would be an empty array.

Next we need to figure out what the paraments are for the function we pass to `.reduce`.  In our example, we named them `total` and `num`.  Remember, this function is going to be called for each element in the array.  The reason we named it `num` is because we're reducing over an array full of integers and for each iteration, `num` is going to be whatever the number is in the array.  We can see this is the example below.

```javascript

function sum (arr) {
  return arr.reduce((total, num) => {
    console.log(num)
  }, 0)
}

sum([1,2,3])
// 1
// 2
// 3

```

That makes sense.  The next thing we need to figure out is `total`.  This is where it gets a little mind-bendy.  In our example, `total` is going to initially be 0, since that's what we set our initial value to.  After that, `total` is going to be whatever the previous iteration returned.  We can see this clearly in the example below.

```javascript

function sum (arr) {
  return arr.reduce((total, num) => {
    console.log(total)
    return Date.now()
  }, 0)
}

sum([1,2,3])

```

The first time our callback function runs, it logs 0 to the console.  Again, that's because we set the initial value to 0.  Then, for each new time the function runs, we get a timestamp in the console because that's what we're returning.

Now let's take this knowledge and look back at our initial solution.

```javascript

function sum (arr) {
  return arr.reduce((total, num) => {
    return total + num
  }, 0)
}

sum([1,2,3])

```

The very first time the callback function runs, `total` will be 0 and `num` will be 1.  Then, the next iteration, `total` will be 1 and `num` will be 2.  The reason `total` is one is because we previously returned `0 + 1`.  Then, `total` will be 3 and `num` will be 3.  Then, there are no more elements in the array so what gets returned is 6.  We can see this in the diagram below.

```text

Initial Value: 0

First iteration:
  total: 0
  num: 1

Second iteration:
  total: 1
  num: 2

Third iteration:
  total: 3
  num: 3

No more elements in the array, return 3 + 3 which is 6.

```

Let's look at the example where we convert an array of objects into another object.

```text

[
 { name: 'Tyler', age: 28},
 { name: 'Mikenzi', age: 26},
 { name: 'Blaine', age: 30 }
] -> Length and age count -> { users: 3, ageTotal: 84}

```

First, what do we want the initial value to be?  We want it to be an object with a users property as well as an `ageTotal` property, both set to 0.

```javascript

function getUserData (users) {
  return users.reduce(() => {

  }, { users: 0, ageTotal: 0 })
}

```

Now we need to figure out what each iteration looks like.  We know what we want to return is the initial object, adding 1 to the `users` property and adding whatever the user's age is to the `ageTotal` property.

```javascript

function getUserData (users) {
  return users.reduce((data, user) => {
    data.users += 1
    data.ageTotal += user.age

    return data
  }, { users: 0, ageTotal: 0 })
}

const users = [
 { name: 'Tyler', age: 28},
 { name: 'Mikenzi', age: 26},
 { name: 'Blaine', age: 30 }
]

getUserData(users) // { users: 3, ageTotal: 84 }

```

Impressive, yeah? Odds are this is still a bit fuzzy. The best thing you can do is take an array, and practice transforming it into anything you can think of.

---

##.reverse
Reverses the order of an array.  It's important to remember that this method mutates the original array.

```javascript

const letters = ['a', 'b', 'c']
letters.reverse()

console.log(letters) // ['c', 'b', 'a']

```

The most common use case I see for `.reverse` is the interview question, "how do you reverse a string?"

```javascript

const string = 'I like JavaScript'
const arr = string.split('') // Convert the string into an array

// Then reverse the array and join it back to a string.
arr.reverse().join('') // "tpircSavaJ ekil I"

```

---

##.shift
Removes the first element from an array and returns it. Favor using .filter instead of .shift as mutations are 👺.

```javascript

const friends = ['Karl', 'Mikenzi', 'Jake']
const removedFriend = friends.shift()

console.log(removedFriend) // Karl
console.log(friends) // ['Mikenzi', 'Jake'

```

---

##.slice
Allows you to create a new array from a portion of an existing array.  It also doesn't modify the original array.

`.slice` takes two arguments.  The first argument is the index of the beginning item you want to grab in the array and the second argument is the index of the end item you want to grab in the array, not inclusive.  So for example, if you do `.slice(1,4)`, the array that is returned will have whatever elements were in the 1st, 2nd, 3rd index in the original array, not the 4th.

```javascript

const friends = ['Jake', 'Mikenzi', 'Jordyn', 'Cash', 'Leo']

const bestFriends = friends.slice(1,4)

console.log(bestFriends) // ['Mikenzi', 'Jordyn', 'Cash']

```

---

##.some
Used to determine if **any** element in an array passes a test specified by a given function.  The function passed to `some` gets invoked once for each element in the array.  As soon as that function returns a truthy value, `some` will stop executing and return `true`.  If the function passed to `some` never returns a truthy value, then `some` will return false.

```javascript

const ages = [6, 14, 12, 22, 13]

const hasAdultSupervision = ages.some((age) => {
  return age >= 21
})

const canRentCar = ages.some((age) => {
  return age >= 25
})

console.log(hasAdultSupervision) // true
console.log(canRentCar) // false

```

---

##.sort
Allows you to sort the elements of an array.  This one is more complex than I'd like it to be.  Here's my rule of thumb that works _most of the time_™.  If what you're sorting is based on string values, you can call `.sort()` and you'd get what you'd expect.

```javascript

const friends = ['Jake', 'Jacob', 'Mikenzi', 'Alex']
friends.sort()

console.log(friends) // ["Alex", "Jacob", "Jake", "Mikenzi"]

```

If you’re wanting to sort an array of integers, you can pass in a function and return the first argument minus the second argument.

```javascript

const ages = [21, 19, 35, 38, 18, 23]
ages.sort((a,b) => a - b)

console.log(ages) // [18, 19, 21, 23, 35, 38]

```

Now say we had a more complex array, something like this array of objects.

```javascript

const users = [
  { name: 'Jim', age: 28 },
  { name: 'Alex', age: 32 },
  { name: 'Mikenzi', age: 26 },
  { name: 'Christina', age: 42 },
]

```

To sort by the age, which is an integer, you would use the same pattern we used above, `a - b`.

```javascript

users.sort((a,b) => a.age - b.age)

```

To sort by name, you'd use a similar pattern, but instead of the minus sign, you'd use a greater than sign.

```javascript

users.sort((a,b) => a.name > b.name)

```

Note that `.sort` is mutative so each time you are invoking it you're modifying the original array.

---

##.splice
Allows you to add and or remove items from anywhere inside of an array.  It's mutative so favor using another method that isn't mutative like `.slice`, `.map`, `.filter` or the spread operator.

The API is a bit funky as well.  The first argument specifies where to start, the second argument specifies how many elements to remove, and the third argument specifies what to add.

```javascript

const friends = ['Jake', 'Karl', 'Mikenzi']

const removedItems = friends.splice(1, 1, 'Jordyn')
// Start at index 1, remove 1 item then add Jordyn

console.log(removedItems) // ['Karl']
console.log(friends) // ['Jake', 'Jordyn', 'Mikenzi']

```

---

##.unshift
Adds one or more elements to the beginning of an array and returns the array's new length.

```javascript

const ages = [22,27,29]

ages.unshift(20) // 4
console.log(ages) // [20,22,27,29]

```

Favor using `.concat` or the Array spread operator instead of `.shift` as mutations are 👺.

```javascript

const ages = [22,27,29]
const newAges = [20].concat(ages)

console.log(ages) // [22,27,29]
console.log(newAges) // [20,22,27,29]

```
```Javascript

const ages = [22,27,29]
const newAges = [20, ...ages]

console.log(ages) // [22,27,29]
console.log(newAges) // [20,22,27,29]

```

---

#Bonus

##.from
`.from` isn't an array method on `Array.prototype` but instead is a static method on the `Array` class.  So you access it with `Array.from()`.

`.from` is used to create a new array from an "array-like" or iterable object.

The most common use case where you see an "array-like" object is with the "arguments" keyword inside of a function.

```javascript

function sumArgs() {
  console.log(arguments)
  return arguments
    .reduce((total, ele) =>
      total + ele,
      0
    ) // Error!
}

sumArgs(1,2,3,4,5) // [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

Notice that `arguments` looks like an array, but it also has some expra properties on it.  So it's an "array-like" object.

Even though it's "array-like", that doesn't mean it's an instance of `Array` which means it doesn't have access to the methods on `Array.prototype`.

This is where `Array.from` comes into play.  We can pass our array-like object to `Array.from` and what we'll get back is an actual instance of `Array`.

```javascript

function sumArgs() {
  return Array.from(arguments)
    .reduce((total, ele) => total + ele, 0)
}

sumArgs(1,2,3) // 6

```