/**
Filter is easy to understand
 */

function mainFilter() {
    const arr = [1, 2, 3, 4];

    let result = null;

    result = arr.filter((item) => item >= 2);
    console.log(result);

    result = arr.filter((item) => {
        if (item >= 2) {
            return true;
        }
        return false;
    });
    console.log(result);

    console.log("Filter with people that older then 10");
    const people = [
        { name: "Jim", age: 10 },
        { name: "Bob", age: 20 },
        { name: "Skype", age: 30 },
    ];
    result = people.filter((person) => person.age > 10);
    console.log(result);
}

mainFilter();
