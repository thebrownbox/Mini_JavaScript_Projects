function main04(){
    const arr = [ {name: "Jim"}, {name: "An"} ];
    console.log(arr);
    
    //! 1. Modify array by forEach
    arr.forEach((e) => {e.age = 1});
    console.log(arr);
}

main04();