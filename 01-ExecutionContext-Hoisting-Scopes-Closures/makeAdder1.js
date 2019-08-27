var count = 0

function makeAdder(x) {
    return function inner (y) {
        return x + y
    };
}

var add5 = makeAdder(5);
count += add5(2)

//Global Execution Context
    /*Phase: Creation
        window: global object
        this: window
        count: undefined
        makeAdder: fn()
        add5: undefined
    */
   /* Phase: Exection
        window: global object
        this: window
        count: 0
        makeAdder: fn()
        add5: undefined
   */
// makeAdder Execution Context
    /* Phase: Creation
        arguments: { 
            0: 5,
            length: 1
        }
        this: window
        x: 5
    */
   /* Phase: Execution
        arguments: { 
            0: 5,
            length: 1
        }
        this: window
        x: 5
   */
  //makeAdder is removed from Execution Stack here but now there is a Closure Scope

  /* Phase: Closure Scope
        arguments: { 
            0: 5,
            length: 1
        }
        this: window
        x: 5
  */
//Inner Execution Context
    /* Phase: Creation
        arguments: {
            0: 2,
            length: 1
        }
        this: window
        y: 2
    */
   /* Phase: Execution
        arguments: {
            0: 2,
            length: 1
        }
        this: window
        y: 2
    */

// Global Execution Context
    /* Phase: Execution
        window: global object
        this: window
        count: 7
        makeAdder: fn()
        add5: fn()
    */