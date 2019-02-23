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

## API


### StdColor(`r`, `g`, `b`)

**Returns:** An RGB array of numbers with the closest matched values.

### StdColor(`hexString`)

**Returns:** An RGB array with the closest matched values.

## License

[MIT](LICENSE) © [Cyberscape](https://cyberscape.co/).
