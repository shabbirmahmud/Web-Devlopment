//prints in console
console.log("Hello World");

//variable
age = 24; //int
console.log(age + 1);
myName = "Shabbir"; //string
console.log(myName);
price = 150.444444; //float
console.log(price);
x = null; // null
y = undefined; // undefined
console.log(x);
console.log(y);
isFollow = false; //bool
console.log(isFollow);

// let, const
let Name = "Shabbir"; //cannot be redeclared but can be updated (block scope)
console.log(Name);
// let Name = "hello"; // Will throw error
const pi = 3.1416;
console.log(pi); //cannot be redeclared & updated (block scope)

let a;
console.log(a); // a value by default undefined
// const b; //will throw error

//block (let has block scope)
{
  let a = 10;
  console.log(a);
}
{
  let a = 20;
  console.log(a);
  console.log(typeof a); //dtata type 'number'
}
console.log(typeof a);
console.log(typeof price);
console.log(typeof myName);
console.log(typeof isFollow);
console.log(typeof x); // even though it shows object its null data type
console.log(typeof y);

//BigInt & Symbol
let big = BigInt("123");
console.log(typeof big);
let sym = Symbol("123");
console.log(typeof sym);

//objects data type -> collection of values (Key : Value)
const student = {
  name: "rahul",
  age: 20,
  cgpa: 3.4,
  isPass: true,
}; // generally we use const with objects
console.log(student);
console.log(typeof student);
console.log(student.name);
console.log(student["name"]);
student.age = student.age + 1; // we used const still we can updatem the key.
console.log(student.age);

// string and number concatenates
concat = "hello" + 123;
console.log(concat);
