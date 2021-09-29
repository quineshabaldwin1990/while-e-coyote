const prompt = require("prompt-sync")({ sigint: true });

console.log("Enter a string: ");
let string = prompt("> ");
console.log("");

let string2 = string;
//prompt loop to continue <10;
while (string.length < 10) {
    console.log(string);
    //Adds new string together;
    string = string + string2;
}
console.log(string);
console.log("Finished!");