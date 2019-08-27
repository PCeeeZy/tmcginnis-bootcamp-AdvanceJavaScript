function first () {
    var name = 'JD'

    console.log(name)
}

function second () {
    var name = 'John'

    console.log(name)
}

console.log(name)   // undefined
var name = 'Paul'
first()             // JD
second()            // John
console.log(name)   // Paul