interface IPerson {
    name: string;
    age: number;
}

class HocSinh implements IPerson{
    name: string; // AUTO adding
    age: number; // AUTO adding
    constructor(){
        this.age = 0;
        this.name = "undefined";
    }
}

const hocSinh = new HocSinh();
console.log({hocSinh});