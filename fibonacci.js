const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Please enter a valuefor "n":');

let first = 0
let second = 1

let count = 0
while (count < input) {
    count = count + 1;
    
    const third = first + second

    console.log(first);
    first = second
    second = third
}
console.log('done');
