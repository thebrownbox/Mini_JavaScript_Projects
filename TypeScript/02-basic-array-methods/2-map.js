/**
It's like transform from one array to another
 */

function mainMap() {
    const original = [1, 2, 3];
    const doubleOriginal = original.map((v) => v * 2);

    console.log(original);
    console.log(doubleOriginal);

    const people = [
        { name: "Jim", age: 10 },
        { name: "Bob", age: 20 },
        { name: "Skype", age: 30 },
    ];

    const result = people.map((person) => ({...person, age: person.age + 1}));
    console.log(result);
}

mainMap();