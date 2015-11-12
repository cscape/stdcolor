[![flat-colors](http://i.imgur.com/S57IeyN.png)](#)

# flat-colors [![Support this project][donate-now]][paypal-donations]

Find the nearest flat color for a RGB/Hex input.

## Installation

```sh
$ npm i flat-colors
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

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Thanks
The color values are taken from [flatuicolors.com](http://flatuicolors.com). :art:

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`color-it`](https://github.com/IonicaBizau/node-color-it#readme)

 - [`couleurs`](https://github.com/IonicaBizau/couleurs)

 - [`gpm`](https://github.com/IonicaBizau/node-gpm)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md