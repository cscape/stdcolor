# Standard Color

Find the nearest Cyberscape Standard color from RGB or HEX.

## Install

```sh
# Using npm
npm install --save cscape/stdcolor

# Using yarn
yarn add cscape/stdcolor
```

## Example

```js
const StdColor = require('@cyberscape/stdcolor')

// Absolute red
console.log(StdColor(255, 0, 0))

// Hex colors
console.log(StdColor('#f00'))
```

## Documentation


### `StdColor(r, g, b)`
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
