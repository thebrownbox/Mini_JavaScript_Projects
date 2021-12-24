/*
Array.reduce it's like running a formula from beginning to the end of the array!
*/

function mainReduce() {
    const arr = [1, 2, 3];
    const result = arr.reduce((prev, curr) => {
        console.log({prev, curr});
        return prev + curr;
    });
    console.log({ result });
    console.log(arr);
}

mainReduce();
