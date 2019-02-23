# Standard Color

Find the nearest flat color for a RGB/Hex input.

## Installation

```sh
# Using npm
npm install --save flat-colors

# Using yarn
yarn add flat-colors
```


## Example



```js
// Dependencies
var FlatColors = require("flat-colors")

// Get the flat red
console.log(FlatColors(255, 0, 0));
// => [211, 84, 0]

// Same thing, but using a rgb array
console.log(FlatColors([255, 0, 0]));
// => [211, 84, 0]


// Still same color but using hex color
console.log(FlatColors("#f00"));
// => [211, 84, 0]

// Random flat color
console.log(FlatColors());
// => [?, ?, ?]
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :memo: Documentation


### `FlatColors(r, g, b)`
Finds the nearest flat color for rgb and hex inputs.

#### Params

- **String|Number|Array** `r`: The color as string in hex format, the *red* value or the rgb passed as array. If `undefined`, a random color will be returned.
- **Number** `g`: The green value.
- **Number** `b`: The blue value.

#### Return
- **Array** An array containing the rgb values of the flat color which was found.

### `toRgb(hex)`
Converts a hex format color into rgb.

#### Params

- **String** `hex`: The color in the hex format.

#### Return
- **Array** The rgb array or null.

## License

[MIT](LICENSE) © [Cyberscape](https://cyberscape.co/).
