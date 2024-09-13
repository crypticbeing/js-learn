//console.log("hello");
const number = new Number(400)
//console.log(number);//it basically orints an object
//console.log(number.toString().length);//3
//console.log(number.toFixed(2));//specially used for e-commerce application transactions

const othernum = 2114.89456
//console.log(othernum.toPrecision(2));//here waht happened is you asked for for the precise value of the 3-digt number at the value of 2 dits and this gives an exponential number
//console.log(othernum.toPrecision(4));//here waht happened is you asked for for the precise value of the 3-digt number at the value of 2 dits and this gives an exponential number

const localnum = 10000000000
//console.log(localnum.toLocaleString());//converts the number to US standard
//console.log(localnum.toLocaleString('en-IN'));//converts the number to Indian standard

Number.MAX_SAFE_INTEGER//used in DSA 
Number.MAX_VALUE//USED in DSA that will get you the max vlue used in JAvascript


//----------------Maths--------------------------

//console.log(typeof Math); //this is an object and it has different properties we can use it to 
//console.log(Math.abs(-456)); //it converts an absolute value I mean negative value to positive number(but postive number will be remain postive)
//console.log(Math.round(4.4)); //it round of the number converts a decimal number to absolute number
//console.log(Math.ceil(4.4)); //ceiling meand roof whichever the decimal number you provide it gives the bigger number
//console.log(Math.floor(4.4)); //floor method takes lower value 
//console.log(Math.sqrt(625)); //squareroot of a number
//console.log(Math.pow(25,3)); //power of a number
//console.log(Math.min(25,3,5,67,83,42,5,9)); //min of numbers
//console.log(Math.max(25,3,5,67,83,42,5,9)); //max of numbers
//console.log(Math.random())//give syou a random number in between 0-1
//console.log((Math.random()*10)+1)//Assure you that it will not give you zero
console.log(Math.floor((Math.random()*10)+1))//Assure you that it will not give you zero

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);





