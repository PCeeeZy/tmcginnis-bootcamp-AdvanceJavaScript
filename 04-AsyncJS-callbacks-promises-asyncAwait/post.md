One of my favorite sites is [BerkshireHathaway.com](https://www.berkshirehathaway.com) - it’s simple, effective, and has been doing its job well since it launched in 1997. Even more remarkable, over the last 20 years, there’s a good chance this site has never had a bug. Why? Because it’s all static. It’s been pretty much the same since it launched over 20 years ago. Turns out sites are pretty simple to build if you have all of your data up front. Unfortunately, most sites now days don’t. To compensate for this, we’ve invented “patterns” for handling fetching external data for our apps. Like most things, these patterns each have tradeoffs that have changed over time. In this post we’ll break down the pros and cons of three of the most common patterns, Callbacks, Promises, and Async/Await and talk about their significance and progression from a historical context.

Let’s start with the OG of these data fetching patterns, Callbacks.

## Callbacks

>I’m going to assume you know exactly 0 about callbacks. If I’m assuming wrong, just scroll down a bit.

When I was first learning to program, it helped me to think about functions as machines. These machines can do anything you want them to. They can even accept input and return a value. Each machine has a button on it that you can press when you want the machine to run, ().

```javascript

function add (x, y) {
  return x + y
}

add(2,3) // 5 - Press the button, run the machine.

```

Whether **I** press the button, **you** press the button, or **someone else** presses the button doesn’t matter. Whenever the button is pressed, like it or not, the machine is going to run.

```javascript

function add (x, y) {
  return x + y
}

const me = add
const you = add
const someoneElse = add

me(2,3) // 5 - Press the button, run the machine.
you(2,3) // 5 - Press the button, run the machine.
someoneElse(2,3) // 5 - Press the button, run the machine.

```

In the code above we assign the `add` function to three different variables, `me`, `you`, and `someoneElse`. It’s important to note that the original `add` and each of the variables we created are pointing to the same spot in memory. They’re literally the exact same thing under different names. So when we invoke `me`, `you`, or `someoneElse`, it’s as if we’re invoking `add`.

Now what if we take our `add` machine and pass it to another machine? Remember, it doesn’t matter who presses the () button, if it’s pressed, it’s going to run.

```javascript

function add (x, y) {
  return x + y
}

function addFive (x, addReference) {
  return addReference(x, 5) // 15 - Press the button, run the machine.
}

addFive(10, add) // 15

```

Your brain might have got a little weird on this one, nothing new is going on here though. Instead of “pressing the button” on `add`, we pass `add` as an argument to `addFive`, rename it `addReference`, and then we “press the button” or invoke it.

This highlights some important concepts of the JavaScript language. First, just as you can pass a string or a number as an argument to a function, so too can you pass a reference to a function as an argument. When you do this the function you’re passing as an argument is called a **callback** function and the function you’re passing the callback function to is called a **higher order function**.

Because vocabulary is important, here’s the same code with the variables re-named to match the concepts they’re demonstrating.

```javascript

function add (x,y) {
  return x + y
}

function higherOrderFunction (x, callback) {
  return callback(x, 5)
}

higherOrderFunction(10, add)

```

This pattern should look familiar, it’s everywhere. If you’ve ever used any of the JavaScript [Array methods](https://tylermcginnis.com/javascript-array-methods-you-should-know/), you’ve used a callback. If you’ve ever used lodash, you’ve used a callback. If you’ve ever used jQuery, you’ve used a callback.

```javascript

[1,2,3].map((i) => i + 5)

_.filter([1,2,3,4], (n) => n % 2 === 0 );

$('#btn').on('click', () =>
  console.log('Callbacks are everywhere')
)

```

In general, there are two popular use cases for callbacks. The first, and what we see in the `.map` and `_.filter` examples, is a nice abstraction over turning one value into another. We say “Hey, here’s an array and a function. Go ahead and get me a new value based on the function I gave you”. The second, and what we see in the jQuery example, is delaying execution of a function until a particular time. “Hey, here’s this function. Go ahead and invoke it whenever the element with an id of `btn` is clicked.” It’s this second use case that we’re going to focus on, “delaying execution of a function until a particular time”.

Right now we’ve only looked at examples that are synchronous. As we talked about at the beginning of this post, most of the apps we build don’t have all the data they need up front. Instead, they need to fetch external data as the user interacts with the app. We’ve just seen how callbacks can be a great use case for this because, again, they allow you to “delay execution of a function until a *particular time*”. It doesn’t take much imagination to see how we can adapt that sentence to work with data fetching. Instead of delaying execution of a function until a *particular time*, we can delay execution of a function *until we have the data we need*. Here’s probably the most popular example of this, jQuery’s `getJSON` method.

```javascript

// updateUI and showError are irrelevant.
// Pretend they do what they sound like.

const id = 'tylermcginnis'

$.getJSON({
  url: `https://api.github.com/users/${id}`,
  success: updateUI,
  error: showError,
})

```

We can’t update the UI of our app until we have the user’s data. So what do we do? We say, “Hey, here’s an object. If the request succeeds, go ahead and call `success` passing it the user’s data. If it doesn’t, go ahead and call `error` passing it the error object. You don’t need to worry about what each method does, just be sure to call them when you’re supposed to”. This is a perfect demonstration of using a callback for async requests.

---

At this point we’ve learned about what callbacks are and how they can be beneficial both in synchronous and asynchronous code. What we haven’t talked yet is the dark side of callbacks. Take a look at this code below. Can you tell what’s happening?

```javascript

// updateUI, showError, and getLocationURL are irrelevant.
// Pretend they do what they sound like.

const id = 'tylermcginnis'

$("#btn").on("click", () => {
  $.getJSON({
    url: `https://api.github.com/users/${id}`,
    success: (user) => {
      $.getJSON({
        url: getLocationURL(user.location.split(',')),
        success (weather) {
          updateUI({
            user,
            weather: weather.query.results
          })
        },
        error: showError,
      })
    },
    error: showError
  })
})

```

If it helps, you can play around with the [live version here](https://codesandbox.io/s/v06mmo3j7l).

Notice we’ve added a few more layers of callbacks. First we’re saying don’t run the initial AJAX request until the element with an id of btn is clicked. Once the button is clicked, we make the first request. If that request succeeds, we make a second request. If that request succeeds, we invoke the updateUI method passing it the data we got from both requests. Regardless of if you understood the code at first glance or not, objectively it’s much harder to read than the code before. This brings us to the topic of “Callback Hell”.

As humans, we naturally think sequentially. When you have nested callbacks inside of nested callbacks, it forces you out of your natural way of thinking. Bugs happen when there’s a disconnect between how your software is read and how you naturally think.

Like most solutions to software problems, a commonly prescribed approach for making “Callback Hell” easier to consume is to modularize your code.