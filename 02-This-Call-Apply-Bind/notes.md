# *This* Keyword
To figure out what this keyword is, look at when it is invoked, not when it is declared.
* ## Implicit Binding
    * Left of the Dot at Call Time

---

* ## Explicit Binding

`Call` takes in an object as first parameter (explicitly defining *this*) and then can take in multiple more parameters.

```javascript

var sayName = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}.`)
};

var stacey = {
    name: 'Stacey',
    age: 34
};

var languages = ['Javascript', 'Ruby', 'Python'];

sayName.call(stacey, languages[0], languages[1], languages[2]); // My name is Stacey and I know Javascript, Ruby, and Python.

```

`Apply` takes in an object as first parameter (explicity defining *this*) and then an array as the next parameter that it can split into the *applied* functions parameters.

```javascript

var sayName = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}.`)
};

var stacey = {
    name: 'Stacey',
    age: 34
};

var languages = ['Javascript', 'Ruby', 'Python'];

sayName.apply(stacey, languages); // My name is Stacey and I know Javascript, Ruby, and Python.

```

`Bind` is like `Call` but instead of invoking the function it creates a new function.

```javascript

var sayName = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}.`)
};

var stacey = {
    name: 'Stacey',
    age: 34
};

var languages = ['Javascript', 'Ruby', 'Python'];

var newFunc = sayName.bind(stacey, languages[0], languages[1], languages[2]); 

newFunc(); // My name is Stacey and I know Javascript, Ruby, and Python.

```

---

* ## *New* and *Window* Binding

---

* ### New

Whenever you use a constructor function to create a new variable, the `this` keyword is bound to the variable object that was created.

```javascript

var Animal = function(color, name, type) {
    //this = {}
    this.color = color;
    this.name = name;
    this.type = type;
};
var zebra = new Animal('black and white', 'Henry', 'Zebra');

```
* ### Window

If there is nothing to the left of the function being called and we are not using `Call`, `Apply`, or `Bind`, `This` will attach to the window object.

If we use the `'use strict'`, javascript is smart enough to realize that `this` should not be bound to window so it will error out.

```javascript

var sayAge = function() {
    // 'use strict'
    console.log(this.age)
};

var me = {
    age: 25
};

sayAge() // undefined
window.age = 35;
sayAge() // 35

```