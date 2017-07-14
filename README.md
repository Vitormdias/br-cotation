# br-cotation
JS Lib to Convert International Currency to Brazilian Real

## Installation

```
  npm install br-cotation --save
```

## Usage

```js
  const brCotation = require('br-cotation')
  
  //with es2016
  const funcX = async () => console.log(await brCotation.dolar())

  funcX()

  //without
  brCotation.dolar().then(r => console.log(r))
```

## Tests
```
  npm test
```

## Contributing

Feel welcome to fork and contribute

## Release History

* 1.0.0 Initial release