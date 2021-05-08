# Caesar cipher CLI

## Using package

- [commander](https://www.npmjs.com/package/commander)

## Installation
```js
$ npm install
```

## Use Caesar cipher CLI

### Encode text
For encode text with Caesar cipher CLI use command 
```js
$ node app  -s 1 -a encode -i ./input.txt -o ./output.txt
```
or 
```js
$ node app  -shift 1 -action encode -input ./input.txt -output ./output.txt
```

### Decode text
For encode text with Caesar cipher CLI use command 
```js
$ node app  -s 1 -a decode -i ./input.txt -o ./output.txt
```
or 
```js
$ node app  -shift 1 -action decode -input ./input.txt -output ./output.txt
```
