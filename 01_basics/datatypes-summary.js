//primitive-data-types

//7 types: String, Number, Boolean, BigInt, Symbol, null, undefined,  

//Reference Data types:(NON-PRIMITIVE)

//Array, Objects, functions


//JAVASCRIPT Dynamic type language or static type language

const Id = Symbol('123')
const anotherID = Symbol('123')
//console.log(typeof (anotherID));

//what It can never be the same thing in case of Symbol.
//when declaring a varibale always give a name whivh is understood by anyone.
//

// const array = [1,2,3,4,5,6]
// const object = {
//     name: "krushna",
//     age: 12

// }

// const funcStore = function() {

// }
// console.log(typeof object);
// console.log(typeof array);

//all of the non-primitive data types are one type of object

//https://tc39.es/ecma262/#sec-typeof-operator


//-------------------------------------------------------------------------

//stack memory(storting the primitive values) and heap memory(non-primitive or reference values) which worked on the above data types.

//Stack memory always provide a copy of itself

// let myName = "krushna"
// const mySurname = myName
// myName = "sarita"
// console.log(mySurname); //krushna
// console.log(myName);//sarita

let main = {
    name: "juty",
    email: "fuck@gmail.com"
}

let main1 = main
main1.email = "burjkhalifa@gmail.com"
console.log(main1.email); //main1 rrefer to the heap memory of main
console.log(main.email); //main1 rrefer to the heap memory of main

//--------------------Difference--------------------//

//Accessing data on the stack is very fast because it operates in a Last-In-First-Out (LIFO) manner and is usually located in a contiguous block of memory.
//The size of the stack is usually limited, and it's generally much smaller than the heap. In case of deep recursion or excessive memory allocation, a stack overflow can occur.

//


