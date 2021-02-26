# Namiko.moe

Unofficial Node.js wrapper for the namiko.moe APIs

## Installation
```
npm install --save namiko.moe
```

## Usage

### Waifus
```js
const { waifus } = require('namiko.moe');

const waifusGot = await waifus('Sayo Hikawa');
const myWaifu = waifusGot[0];

console.log(myWaifu);
```
