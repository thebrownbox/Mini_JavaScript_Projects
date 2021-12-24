/**
Record<Keys, Type>
Constructs an object type whose property keys are Keys and whose property values are Type. 
This utility can be used to map the properties of a type to another type.
 */

interface Person {
    name: string;
    age: number;
}


const diemDanh: Record<keyof Person, Boolean> = {
    
};

