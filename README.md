# checkroot

> Check if the current user is root or not

## Install

```
$ npm install --save checkroot
```

## Usage

```js
const checkroot = require('checkroot');

// returns
//   true, if the current user is root
//   false, otherwise
console.log(checkroot());
```

## API

First it tries to get the username from the `USER` and `LOGNAME` environment variables. In the rare case when none of these environment variables are set, it falls back to `$ id -un` on Linux / MacOS and `$ whoami` on Windows. The result is cached using [`mem`](https://www.npmjs.com/package/mem).

### checkroot()

Returns `true`, if the current user is root and `false`, otherwise.

## License

MIT © [Sahil Dua](http://sahildua.com)
