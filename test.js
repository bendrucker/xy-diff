'use strict'

var test = require('tape')
var xyDiff = require('./')

test(function (t) {
  t.deepEqual(xyDiff({x: 1, y: 2}, {x: 3, y: 10}), {
    x: 2,
    y: 8
  })
  t.end()
})
