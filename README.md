# Caesar cipher CLI

## Using package

- [commander](https://www.npmjs.com/package/commander)

## Installation
```js
$ npm install
```

## Use Caesar cipher CLI

### Using 4 options (short alias and full name):
1. -s, --shift: a shift is important
2. -i, --input: an input file
3. -o, --output: an output file
4. -a, --action: an action encode/decode is important

### Encode text
For encode text with Caesar cipher CLI use command 
```js
$ node app  -s 1 -a encode
```
or 
```js
$ node app  -shift 1 -action encode 
```

### Decode text
For encode text with Caesar cipher CLI use command 
```js
$ node app  -s 1 -a decode
```
or 
```js
$ node app  -shift 1 -action decode 
```

### Encode file
For encode text with Caesar cipher CLI use command 
```js
$ node app  -s 1 -a encode -i ./input.txt -o ./output.txt
```
or 
```js
$ node app  -shift 1 -action encode -input ./input.txt -output ./output.txt
```

### Decode file
For encode text with Caesar cipher CLI use command 
```js
$ node app  -s 1 -a decode -i ./input.txt -o ./output.txt
```
or 
```js
$ node app  -shift 1 -action decode -input ./input.txt -output ./output.txt
```

## Algorithm
- [wiki](https://en.wikipedia.org/wiki/Caesar_cipher)