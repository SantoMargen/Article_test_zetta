"use strict";

const data = [
    { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
    { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
    let output = []

    for (let i = 0; i < data.length; i++) {
        let x = Object.values(data[i]);

    }

    console.log(output);
}

console.log(result(data));