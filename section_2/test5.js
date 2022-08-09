"use strict";

const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
    let output = []
    for (let i = 0; i < students.length; i++) {

        console.log(Object.keys(students[i]));
        let tmpArr = []
        for (let j = 0; j < groups; j++) {

        }
    }

}

console.log(result(students, groups));
/*
[
  [
  { "firstName": "Belle", "lastName": "Norton" },
  { "firstName": "Finnley", "lastName": "Rennie" }
      ],
  [
  { "firstName": "Kai", "lastName": "Lyons" },
  { "firstName": "Peyton", "lastName": "Gardner" }
          ],
  [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
     ]
     */