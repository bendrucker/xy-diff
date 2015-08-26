'use strict'

var assertCoordinates = require('assert-coordinates')

module.exports = function xyDiff (a, b) {
  assertCoordinates(a)
  assertCoordinates(b)

  return {
    x: b.x - a.x,
    y: b.y - a.y
  }
}
