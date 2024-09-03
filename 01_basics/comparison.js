// console.log(2>1); //it will give boolean values of true or false if the statement is true

// console.log("2">1);//true

//why it gives the true value because javascript convert string to number in comparison

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // true
console.log(undefined > 0); // true
console.log(undefined == 0); // true
console.log(undefined >= 0); // true

//here what happens, comparison or equality operator converts null to a number, thats why it gives a true value in this ambiguity condition.
//It creates unless confusion


