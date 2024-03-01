
let answer = Number(prompt("Please enter the number you would like to FizzBuzz up to:"))

function fizzbuzz() {
    for (let i = 0; i <= answer; i++) {
        //if the number is divisible by 3 return fizz
        if (i % 3 == 0) {
            console.log("fizz");
        }
        //if the number is divisible by 5 return buzz
        if (i % 5 == 0) {
            console.log("buzz");
        }
        //if the number is divisible by 3 and 5 return fizzbuzz
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
        }
        console.log(i);
    }
}

fizzbuzz()