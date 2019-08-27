var name = 'Paul'
var handle = '@paulcwik'

function getURL (handle) {
    var twitterURL =  'https://twitter.com'
    return twitterURL + handle
}

getURL(handle)

//Global Execution Context
    /*Phase: Creation
        window: global object
        this: window
        name: undefined
        handle: undefined
        getURL: fn()
    */
   /* Phase: Exection
        window: global object
        this: window
        name: 'Paul'
        handle: '@paulcwik'
        getURL: fn()
   */
// getURL Execution Context
    /* Phase: Creation
        arguments: { 
            0:'@paulcwik',
            length: 1
        }
        this: window
        twitterURL: undefined
        handle: '@paulcwik'
    */
   /* Phase: Execution
        arguments: { 
            0:'@paulcwik',
            length: 1
        }
        this: window
        twitterURL: 'https://twitter.com'
        handle: '@paulcwik'
   */
  //Then return happens so the getURL is popped off the Execution Stack