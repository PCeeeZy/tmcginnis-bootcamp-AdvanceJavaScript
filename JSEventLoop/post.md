I want to tell you a story about my friend Bruce.  You see, Bruce was a simple man.  Nice family, nice job, nice home in Springville, Utah.  He enjoyed fly fishing, Solitaire, and watching Wheel of Fortune.  One Saturday morning as Bruce was watching his son's Soccer match, he got a phone call from a Woman named Christy.  Christy claimed to be from Bassi Law, a law firm in San Fransisco specliazing in "Estate Planning and Probate Law".  According to Christy, Bruce was a recipient of a large sum on inheritance money left to him by his late Grandpa Archie.  Although Bruce and Archie didn't talk much, they did take a yearly Fly Fishing trip down at the Patagonia River Ranch in Argentina.  A long story and lots of taxes later, Bruce was no longer a simple-man.  As the late poet Christopher Wallace said, "Mo Money Mo Problems".  Bruce quickly adjusted to the lavish life.  Attending Sillicon Valley "sex parties" and investing in Utah crytocurrency companies with no product became his new norm.  In order to keep up with his newly formed lifestyle, Bruce decided to hire a butler named Wadsworth to take care of his old "common folk" tasks.

> This is where the story gets interesting. - Dwight Shrute

You see, this isn't a story about Bruce's moral decay.  We're not that type of website.  However, this is a story about one butler, Wadsworth, and his learnings in systemizing all his tasks for increased productivity.  When Wadsworth became Bruce's butler, it's as if he had to take over Bruce's entire (before he became lavish) life.  Laundry, cleaning, picking up the kids, all of it became Wadsworth's responsibility.  Initially, Wadsworth wasn't worried - he'd just work harder.

On the first day, Wadsworth had the following todo list.

```

Get the Dry Cleaning done
Clean the Garage
Get the Car Detailed
Pick up the Kids

```

In order to keep the family informed on what he was working on at any given moment, Wadsworth also created a “Current Task” list.

Here’s how his Todo list and Current Task list changed throughout the first day.

---

10AM -

   Current Task

       Get the Dry Cleaning done

   Todo List

       Get the Dry Cleaning done

       Clean the Garage

       Get the Car Detailed

       Pick up the Kids

Noon -

   Current Task

      Clean the Garage

   Todo List

       ~~Get the Dry Cleaning done~~

       Clean the Garage

       Get the Car Detailed

       Pick up the Kids

2PM -

   Current Task

       Get the Car Detailed

   Todo List

       ~~Get the Dry Cleaning done~~

       ~~Clean the Garage~~

       Get the Car Detailed

       Pick up the Kids

5PM -

   Current Task

       Pick up the Kids

   Todo List

       ~~Get the Dry Cleaning done~~

       ~~Clean the Garage~~
       
       ~~Get the Car Detailed~~

       Pick up the Kids

5:30PM -

   Current Task

       NA

   Todo List

        ~~Get the Dry Cleaning done~~

        ~~Clean the Garage~~

        ~~Get the Car Detailed~

        ~~Pick up the Kids~~

---

Not a great look for our friend Wadsworth’s first day. He got all his tasks done, but the kids got out of school at 3PM and weren’t picked up until 5PM. Combine this with the fact that they all still miss their Dad; it made for a rough day.

Three weeks later and Wadsworth was given the original todo list again. He knew this time the smart thing to do was to prioritize picking up the kids, so that’s what he did.

---

10AM -

   Current Task

       Get the Dry Cleaning done

   Todo List

       Get the Dry Cleaning done

       Clean the Garage

       Get the Car Detailed

       Pick up the Kids

1PM -

   Current Task

      Clean the Garage

   Todo List

       ~~Get the Dry Cleaning done~~

       Clean the Garage

       Get the Car Detailed

       Pick up the Kids

3PM -

   Current Task

       Pick up the Kids

   Todo List

       ~~Get the Dry Cleaning done~~

       ~~Clean the Garage~~

       Get the Car Detailed

       Pick up the Kids

4PM -

   Current Task

       Get the Car Detailed

   Todo List

       ~~Get the Dry Cleaning done~~

       ~~Clean the Garage~~

       Get the Car Detailed

       ~~Pick up the Kids~~

7:00PM -

   Current Task

       NA

   Todo List

       ~~Get the Dry Cleaning done~~

       ~~Clean the Garage~~

       ~~Get the Car Detailed~~

       ~~Pick up the Kids~~

---

Much better. Wadsworth got all his tasks done. Sadly, he didn’t get to go home until 7 PM this time. You don’t have to be a rocket surgeon to know there are some optimizations Wadsworth can make to his schedule to both get his tasks done and get home at a reasonable hour. Right now, he’s doing everything synchronously. Goes to the dry cleaner, waits until it’s done before he leaves. Goes to get the car detailed, waits until the car’s done before he leaves. He’s wasting a bunch of time sitting around when he could be working on other items on his to-do list.

Three weeks later Wadsworth is given the same todo list again. Instead of repeating the same thing this time, he’s come up with a plan. Instead of waiting around at the Dry Cleaners and Car Detailer, he tells them to text him when they’re done. There are two obvious benefits here. First is that while the dry cleaning is being done or the car is being detailed, he has the freedom to work on any of his other tasks (or relax if he wants). Second is that he’s free to decide when he should pick up the clothes and the car.

To keep things simple, he decides to check off the tasks that involve leveraging someone else (dry cleaning and car detailing) when he first drops off the clothes/car instead of when he picks them up. This allows him to better visualize what he still has remaining on his todo list.

---

10AM -

   Current Task

       Get the Dry Cleaning done

   Todo List

       Get the Dry Cleaning done

       Clean the Garage

       Get the Car Detailed

       Pick up the Kids

10:15 -

   Current Task

       Get the Car Detailed

   Todo List

       ~~Get the Dry Cleaning done~~

       Clean the Garage

       Get the Car Detailed

       Pick up the Kids

10:30 -

   Current Task

       Clean the Garage

   Todo List

       ~~Get the Dry Cleaning done~~

       Clean the Garage

       ~~Get the Car Detailed~~

       Pick up the Kids

12:30PM -

   Received a text that the clothes are done.

   Decides to wait until the car is finished too.

   Current Task

       NA

   Todo List

       ~~Get the Dry Cleaning done~~

       ~~Clean the Garage~~

       ~~Get the Car Detailed~~

       Pick up the Kids

1:15PM -

   Received a text the car is finished.

   UBERed to pick up the car.

   Current Task

       NA

   Todo List

       ~~Get the Dry Cleaning done~~

       ~~Clean the Garage~~

       ~~Get the Car Detailed~~

       Pick up the Kids

3PM -

   Current Task

       Pick up the Kids

   Todo List

       ~~Get the Dry Cleaning done~~

       ~~Clean the Garage~~

       ~~Get the Car Detailed~~

       Pick up the Kids

3:30PM -

   Current Task

       NA

   Todo List

       ~~Get the Dry Cleaning done~~

       ~~Clean the Garage~~

       ~~Get the Car Detailed~~

       ~~Pick up the Kids~~

---

With his new strategy, Wadsworth is able to prioritize picking up the kids on time, finishes all his tasks earlier, and has more time throughout the day to relax at the house while he waits to pick up the kids. You can visualize his new process like this.

![Process](./images/1.png)

---

> Cool story, Tyler… but I’m here to learn about the JavaScript event loop. - you, probably.

Turns out, our story of a morally corrupt father and an overwhelmed butler isn’t too far from the architecture of the actual JavaScript event loop. Let me explain.

Let’s start with the original todo list. You can think of this as a list of functions that eventually need to get executed (or invoked). If the original todo list is the list of functions, then the “Current Task” list is what’s called the “call stack”. JavaScript is single threaded. What that means is that only one task can be executed at a time. You call a function, a new “frame” is added to the call stack and doesn’t get popped off until that function is finished executing.

If that function calls another function, another frame is added to the call stack.

Let’s say we had some code that looked like this

```javascript

function first () {
    return second()
}

function second () {
    return third()
}

function third () {
    return fourth()
}

function fourth () {
    return fifth()
}

function fifth () {
    return "🥞"
}

first()

```

If we were to slow down the call stack for the code above in order to visualize the process, it would look like this.

![Call Stack](./images/2.gif)

Going back to our story, if each item on the original list is a function, and the “Current Task” list is the call stack, that makes Wadsworth the JavaScript Engine. Wadsworth is the one responsible for executing each of the items and placing them on the “Current task” list (i.e. the call stack). Like the JavaScript Engine, Wadsworth can only work on one task at a time, synchronously. If we were to visualize his initial process as a call stack, it would look something like this where each task is completed one after the other.

![Call Stack](./images/3.gif)

As Wadsworth discovered, working on tasks synchronously, one after the other, wasn’t the most effective approach. For Wadsworth, it meant wasted time and being late to pick up the kids. For the browser, it means an unresponsive UI and a terrible UX. You’ve probably experienced it before. As a user you trigger some event from the UI, then the whole app freezes. You click once, nothing happens. You click 85 more times, nothing happens. Then, just as you’re about to exit the app, all your click events register and the app goes crazy. The reason this happens is because JavaScript is synchronous. There was a single frame on the call stack which was blocking everything else.

As Wadsworth eventually figured out, sometimes it makes sense to do things asynchronously if you can. In the case of Wadsworth, it was the dry cleaning and car detailing. In the case of JavaScript, it’s things like Ajax requests or timers. There were **two** important aspects that allowed Wadsworth to accomplish these async tasks. The **first** was that there was some external service he was able to leverage. He didn’t have to do the dry cleaning or detail the car himself. In the browser, these “external services” are called Web APIs. In Node, they’re C++ APIs. The second was that those services agreed to text Wadsworth when they were finished with the task. That gave him the freedom to work on other tasks while those tasks were being completed and just as important, it gave him the option to decide *when* to pick up the clothes and car. Similar, when a Web or C++ API finishes their task, the way they notify the JavaScript engine is by pushing the callback function that was given to them into what’s called a “Task Queue”. Just as Wadsworth’s text inbox was a collection of completed async tasks ready for him to pick up, so to is the Task Queue a collection of completed async tasks whose callback functions are ready to be executed and pushed onto the call stack.

| Wadsworth | Javascript |
|:---:|:---:|
| Todo List | Functions |
| Current Task List | Call Stack |
| Async Todo Items | Web or C++ APIs |
| Text Inbox | Task Queve |

There’s only one more piece to this process we need to figure out before we dive into some code. That piece is how a function gets from the Task Queue onto the Call Stack. Looking at Wadsworth one last time as our example - he didn’t decide to pick up the car or clothes until the previous task he was working on (cleaning the garage) was finished. It’s similar with JavaScript. When the call stack is empty, the JavaScript engine will look to the Task Queue to see if there are any functions that need to be executed and pushed onto the call stack. This is important to conceptualize. Only when the call stack is empty will the JavaScript engine look to see if there’s anything in the Task Queue. What that means is that if there’s a frame on the call stack that’s taking forever, nothing on the Task Queue will get processed. This whole process is called the “Event Loop”.

Sometimes looking at code makes things clearer, here’s how you can think about the Event Loop.

```javascript

let callStack = []
let taskQueue = []

while (true) {
  if (callStack.length === 0 && taskQueue.length > 1) {
    callStack.push(taskQueue.shift())
  }
}

```

---

Alright, enough high-level stuff. Let’s look at some code to solidify our metaphor.

The easiest way to see how async JavaScript works is with `setTimeout`. `setTimeout` allows you to delay execution of a particular function for a specified number of milliseconds.

If you’ve never used it before,

```javascript

setTimeout(function () {
  console.log('This logs at least two seconds later.')
}, 2000)

```

The reason we’re going to use `setTimeout` to demonstrate async JavaScript is because `setTimeout` is **non** blocking. Remember, JavaScript is single threaded (only one task can be executed at a time). Since `setTimeout` is non-blocking, that means it won’t sit on the call stack waiting for the milliseconds to pass. If it did, the entire app would be blocked from doing anything else other than waiting. Instead what `setTimeout` does is it kicks off the whole event loop process we learned about earlier.

> It’s important to note here that “setTimeout” isn’t part of the JavaScript language. Instead, it comes with the environment JavaScript runs in (typically the Browser or Node). From earlier, we’d call “setTimeout” a Web or C++ API.

In what order will the logs show up in the console for the code below?

```javascript

console.log('First')

setTimeout(function () {
    console.log('Second')
}, 1000)

console.log('Third')

```

As you probably guessed, the order is going to be `First`, `Third`, then `Second`. What’s more interesting here is what’s happening behind the scenes with the event loop. Let’s take a look.

We’re going to use a tool called Loupe which allows you to visualize the JavaScript run time, at run time. That’s a fancy way of saying that it’s going to slow down processing our code for us so we can see how JavaScript treats the call stack and any async code we have.

> You can play with this code yourself, [here](http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ0ZpcnN0JykKCnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogICAgY29uc29sZS5sb2coJ1NlY29uZCcpCn0sIDEwMDApCgpjb25zb2xlLmxvZygnVGhpcmQnKQ%3D%3D!!!).

![Loupe](./images/4.gif)

This flow should look familiar. It’s the exact same concept that Wadsworth used earlier for figuring out how to most effectively manage his day, but instead of “Current Task”, “Services”, and “Text Inbox” we have the “Call Stack”, “Web APIs”, and “Task Queue”.

Watch the GIF a few times so you can see what’s going on. First `log` is invoked. That’s a synchronous task so JavaScript doesn’t need to do anything fancy. It just pushes `log` onto the call stack then it’s popped off once it’s executed. Next `setTimeout` is invoked. This one is async so JavaScript needs to put on its big boy pants. It first pushes `setTimeout` onto the call stack. From there, the anonymous function that is given to `setTimeout` is added to the `Web APIs` section. It’s this section which is responsible for counting to 1000 milliseconds. From there `setTimeout` is popped off the call stack and JavaScript continues to evaluate the code line by line. Next another synchronous `console.log` invocation is made so it’s added to the call stack and executed. At some point during the execution of the second `console.log`, the Web API saw that 1000 milliseconds had passed so it pushed the anonymous function into the `Task Queue` section. As we discussed earlier, whenever the call stack is empty the Event Loop checks the Task Queue and pushes the first item in there onto the call stack.

That was a big wall of text. Here’s the thing. If you’re with me still, you’re good. The complexity of the examples from here increases, but fundamentally everything will be the same as the example above. Even if the code becomes more complex, the process is still the exact same.

Same question. What order will the logs show up in the console with the code below?

```javascript

console.log('First')

setTimeout(function () {
  console.log('Second')
}, 0)

console.log('Third')

```

Everything is the exact same as before but instead of waiting 1000 milliseconds to push the anonymous function to the Task Queue, the Web APIs section is going to wait 0 milliseconds.

Your intuition might be `First`, `Second`, `Third`. Unfortunately, that’s not right. Think about what you know about the Event Loop. The key here is that the Task Queue only gets cleared out once the Call Stack is clear.

![Loupe Timeout](./images/5.gif)

By the time the anonymous function is pushed into the Task Queue, the second `console.log` is already on the call stack. That means that the Event Loop waits until the call stack is clear before it moves the anonymous function from the Task Queue onto the call stack, therefore logging `First`, `Third`, and `Second`.

> Loupe doesn’t currently support simulating the visual for Ajax or HTTP requests but the process is the exact same. Instead of the Web API being setTimeout, it’s XMLHttpRequest.

---

You may be familiar with native Promises that were introduced into JavaScript as of ES6. To accommodate that addition, there was a change to the Event Loop as well called the “Job Queue”. The way I like to think of it is it’s similar to the Task Queue except items in the Job Queue have a higher priority than items in the Task Queue. That means the Event Loop will clear out the Job Queue before it starts clearing out the Task Queue. The code below demonstrates this.

```javascript

console.log('First')

setTimeout(function () {
  console.log('Second')
}, 0)

new Promise(function (res) {
  res('Third')
}).then(console.log)

console.log('Fourth')

```
```

First
Fourth
Third
Second

```

Even though the `setTimeout` was before the `Promise.then`, because Promise jobs are put in the Job Queue which has a higher priority than the Task Queue, `Third` is logged to the console before `Second`.