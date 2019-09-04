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