[![flat-colors](http://i.imgur.com/S57IeyN.png)](#)

# Standard Color 

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/flat-colors.js.svg)](https://travis-ci.org/IonicaBizau/flat-colors.js/) [![Version](https://img.shields.io/npm/v/flat-colors.svg)](https://www.npmjs.com/package/flat-colors) [![Downloads](https://img.shields.io/npm/dt/flat-colors.svg)](https://www.npmjs.com/package/flat-colors) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>

> Find the nearest flat color for a RGB/Hex input.

## :cloud: Installation

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
