ref: https://www.typescriptlang.org/docs/handbook/utility-types.html




1. Interface cannot create an object

```
interface IPerson{
    name: string;
    age: number;
}

class Person{
    name: string;
    age: number;
}

const x = new Person();
const y = new IPerson(); //! => ERROR
```

2. Interface for type checking

```
function showPerson(person: IPerson) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
}

const notAPerson = {
    name: "Jim",
    isPerson: false,
};

const iAmPerson = {
    name: "Jim",
    age: 20,
};

showPerson(iAmPerson);
showPerson(notAPerson); //! => ERROR
```