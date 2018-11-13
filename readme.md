# xy-diff [![Build Status](https://travis-ci.org/bendrucker/xy-diff.svg?branch=master)](https://travis-ci.org/bendrucker/xy-diff) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/xy-diff.svg)](https://greenkeeper.io/)

> Find the x/y difference between a pair of coordinates


## Install

```
$ npm install --save xy-diff
```


## Usage

```js
var xyDiff = require('xy-diff')

xyDiff({x: 0, y: 10}, {x: 10, y: 100})
//=> {x: 10, y: 90}
```

## API

#### `xyDiff(coord1, coord2)` -> `object`

##### coord1 / coord2

*Required*  
Type: `object`

A set of x/y number pairs.

## License

MIT © [Ben Drucker](http://bendrucker.me)
