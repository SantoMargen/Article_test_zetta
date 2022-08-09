"use strict";

let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9]

function result(originalData, numbersOne, numbersTwo) {
    // Your Code Here
    let totalNumberMerge = 0
    let datanumberMerge = numbersOne.concat(numbersTwo).sort()
    let totalDataDelete = 0

    for (let i = 0; i < datanumberMerge.length; i++) {

        if (datanumberMerge.includes(originalData[i]) === false && originalData[i] <= datanumberMerge[datanumberMerge.length - 1]) {
            totalDataDelete += originalData[i]
        }
        if (datanumberMerge[i] === datanumberMerge[i + 1]) {
            continue
        } else {
            totalNumberMerge += datanumberMerge[i]
        }
    }
    return totalNumberMerge / totalDataDelete

}

console.log(result(originalData, numbersOne, numbersTwo));