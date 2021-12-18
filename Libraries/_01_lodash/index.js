const _ = require("lodash");

const objA = {
    name: "Cong",
};

const objB = {
    name: "Jim",
    age: 100,
};

const objC = {
    name: "Jim",
    age: 100,
    anotherObj: {
        name: 99,
    },
};

console.log(_.get(objA, "age")); // => undefined
console.log(_.get(objB, "age")); // => 100

//! => Instead of getting an exception, it only return undefined value!
console.log(_.get(null, "age")); // => undefined

console.log(_.get(objC, "anotherObj.name")); // => 99

//! => Never crush if you're using Lodash to interact with objects
console.log(_.get(objC, "wrong.multiple.time.name")); // => undefined
