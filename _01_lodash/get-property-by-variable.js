const _ = require("lodash");


const obj = {
    name: "Jim",
    age: 20
}

//! In some case the property is stored in a variable
const propertyName = "age"; //name

console.log(_.get(obj, propertyName));
console.log(_.get(obj, "[" + propertyName + "]"))