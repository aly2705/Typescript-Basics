// Primitives: number,string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives
let age: number = 19; //type decarations
age = 20;

let userName: string;
userName = "aly2022";

let learnsReactAndTypeScript: boolean = true;

// More complex types
let hobbies: string[]; //array of strings
hobbies = ["Sports", "Programming"]; //works
//hobbies = ["Sports", "Programming", 12]; //doesn't works

// let person;
// person = { name: "Max", age: 32 }; // type is 'any' like in JS

type Person = { name: string; age: number }; //TYPE ALIAS - avoid duplication

let person: Person; // definition of object structure
person = { name: "Max", age: 32 };
//person = {isEmployee: true} //fails

let people: Person[]; // array of objects with a certain structure
people = [
  { name: "Max", age: 32 },
  { name: "Aly", age: 19 },
];

//TYPE INFERENCE
let courseName = "React - The Complete Guide";
//course = 12345; // fails because TS give course a 'string' type

//UNION TYPES
let course: string | number = "React - The Complete Guide";
course = 12345;

//Functions & types
function add(a: number, b: number) {
  return a + b; // number is infered
}

function addWithType(a: number, b: number): number {
  //we defined a type for the return type
  return a + b; // number is infered
}

function printOutput(value: any) {
  console.log(value);
}
//type of return is void (meaning that the function does not return)

// Generics
function insertAtBeginning<Type>(array: Type[], value: Type) {
  // the function is type safe, but flexible (at execution the type is locked in and known)
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
//updatedArray[0].split(""); // results in error because TS knows that the array will have numbers (therefore .split won't work)
