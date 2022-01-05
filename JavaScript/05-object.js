function main05(){
    const obj = {};
    obj["name"] = "Jack";
    obj["Cap Ba"] = "12A";
    obj["CapHai"] = "8A";
    console.log(obj);

    //! Sometime you get weird object definition
    const otherObj1 = {['Property with space']: "ok"};
    console.log(otherObj1);

    const otherObj2 = {'Property with space': "ok"};
    console.log(otherObj2);
}

main05();