"use strict";

function result(numbers) {
    // Your Code Here
    [numbers.a, numbers.b] = [numbers.b, numbers.a]
    return numbers
}

let numbers = {
    a: 2,
    b: 4
};

console.log(result(numbers));