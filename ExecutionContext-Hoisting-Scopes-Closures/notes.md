***EXECUTION CONTEXT***

    ### Global Execution Context ###
        ~Create a global object.
        ~Create an object called 'this'.
        ~Set up memory space for variables and functions.
        ~Assign variable declarations a default value of 'undefined' while placing any function declarations in memory.

    ### Function Execution Context ###
        ~Create an arguments object.
        ~Create an object called 'this'.
        ~Set up memory space for variables and functions.
        ~Assign variable declarations a default value of 'undefined' while placing any function declarations in memory.

    Anytime a new function is invoked, a new execution context is created and added to the execution stack. Whenever a new function finished running through the creation phase and the execution phase it is popped off the execution stack.

    ---------------------------------------------

    Scope -- (https://developer.mozilla.org/en-US/docs/Glossary/Scope)
    The current context of execution. The context in which values and expressions are "visible," or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

    A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.

    ---------------------------------------------------

    The current context of execution is key in the definition of scope.  Are we in global execution context or function execution context?  These are global and inline scopes.

    ---------------------------------------------------

    In the function execution context, during the execution phase, js will first check for a variable in its current execution context.  If it doesn't find one, it will next check the nearest parent execution context.  This will continue until it reaches the global execution context.  If the variable still doesn't exist it will equate to undefined.