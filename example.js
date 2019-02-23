// Dependencies
var StdColor = require('../lib')

// Get the flat red
console.log(StdColor(255, 0, 0))
// => [211, 84, 0]

// Same thing, but using a rgb array
console.log(StdColor([255, 0, 0]))
// => [211, 84, 0]

// Still same color but using hex color
console.log(StdColor('#f00'))
// => [211, 84, 0]
