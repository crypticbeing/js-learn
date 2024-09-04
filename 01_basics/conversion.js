let score = undefined

//number to string conversion and string to number conversion.
//console.log(typeof (score));
//let valueNumber = Number (score) // Number conversion
//console.log(typeof valueNumber);
//console.log(valueNumber) //this will give you NaN because javascript convert the string into a number but NaN stands for Not a numbber so it will give you the type as a number.
//It is a special type of number that we have to check that if it gives this type of value or Not, thats why nowadays programmers use Typescript


// "33" -> convert to number
// "33abc" -> NaN not converted
// true - 1
//false - 0
// null -> 0
// undefined -> NaN

//let booleanLogged = "abc"
//let booleanLoggenIn = Boolean(booleanLogged)
//console.log(booleanLoggenIn);

// 1 -> true
// 0-> false
//"abc" -> true

let someNumber = null
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber); //NUmber converted into string


/*******************Operations********************* */

let value = 3
let negValue = -value
// console.log(negValue)
// console.log(typeof negValue)

// console.log(typeof ("1"+2+2)); //string ->122
// console.log(typeof (1+2+"2")); //string -> 32
// console.log(+true); //true -> 1
//console.log(true+);//Error because operator preference is "+" first
//console.log(+""); //"" -> 0

let gameCounter = 100
gameCounter++; //postfix operator gives the same value as prefix operator
++gameCounter; //prefix operator
//console.log(gameCounter);






















