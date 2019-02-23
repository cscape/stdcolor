const Colors = require('./colors')

/**
 * hexToRgb
 * Converts a hex format color into rgb.
 *
 * @name toRgb
 * @function
 * @param {String} hex The color in the hex format.
 * @return {Array} The RGB array
 */
const hexToRgb = hex => {
  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  const num = parseInt(hex, 16)
  const rgb = [num >> 16, (num >> 8) & 255, num & 255]

  return rgb
}

/**
 * Standard Color
 * Finds the nearest Standard color for rgb and hex inputs.
 *
 * @name StdColor
 * @function
 * @param {String|Number|Array|undefined} r The color as string in hex format, the *red* value or the rgb passed as array. If `undefined`, a random color will be returned.
 * @param {Number} g The green value.
 * @param {Number} b The blue value.
 * @return {Array} An array containing the rgb values of the flat color which was found.
 */
const StdColor = (r, g, b) => {
  if (r == null) {
    return Colors[Math.floor(Math.random() * Colors.length)]
  }

  if (typeof r === 'string' && r.charAt(0) === '#') {
    return StdColor(hexToRgb(r))
  }

  var rgb = Array.isArray(r) ? r : [ r, g, b ]

  var best = null

  for (var i = 0; i < Colors.length; ++i) {
    var d = distance(Colors[i], rgb)
    if (!best || d <= best.distance) {
      best = { distance: d, index: i }
    }
  }

  return Colors[best.index]
}

function distance (a, b) {
  return Math.sqrt(
    Math.pow(a[0] - b[0], 2) +
      Math.pow(a[1] - b[1], 2) +
      Math.pow(a[2] - b[2], 2)
  )
}

module.exports = StdColor
