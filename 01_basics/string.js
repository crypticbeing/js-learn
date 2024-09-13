//----------------Template Literals used to represent string concatenation ina better way------------//
//Template literals in JavaScript are a feature that allows you to work with strings in a more flexible and readable way compared to traditional string concatenation. 

const name = "kruhshna"
const gitHubRepoCount = 60

//console.log(`my name is ${name} and my github repo count is ${gitHubRepoCount}`);

//Different ways to define a new string

const newString = new String("hello") //creates an object rather than primitive string
//console.log(newString);
//console.log(newString[0]);
//console.log(newString.length);
//console.log(newString.charAt(3));
//console.log(newString.split()); //converts to an array
//this results in a object and the values are in array format so that we can pop and push/Shift or Unshift values in future.
//console.log(newString.substring(0,3));//prints all the charactes of index from 0 to 3, but not the 3 (not accepting negative values)
//console.log(newString.concat("krushna"));
//console.log(newString.slice(-4,3)); //The slice method extracts a portion of the string from the start index to the end index, but it does not include the character at the end index.
//-4 as the start index means it starts slicing from the fourth character from the end of the string ("l" in "hello").
//console.log(newString.slice(-8,2)); //An index of -8 is out of bounds for this string since it's greater than the length of the string. In such cases, the start index is treated as 0 (beginning of the string) if it is less than the string's length.
//console.log(newString.toWellFormed());//ill formed letters or unicode to 
//console.log(newString.charCodeAt(4)); //UNicode value for "o"


const illFormed = "https://example.com/search?q=\uD800";
//console.log(illFormed.toWellFormed());//https://example.com/search?q=�



const greeting = '   Hello world!   ';

console.log(greeting.split(' '));

//console.log(greeting);
// Expected output: "   Hello world!   ";

//console.log(greeting.trim()); //this method is used for forms where a user mistakenly enters some space after the email or his name, this prototype trims the empty space and gives the normal value
//console.log(greeting.trimStart());//"Hello world!   "
//console.log(greeting.trimEnd());//"   Hello world!"





// Expected output: "Hello world!";

const paragraph = "I think Ruth's dog is cuter than your dog!";

//console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i; //This creates a regular expression regex with the pattern /Dog/.This creates a regular expression regex with the pattern /Dog/.
//console.log(paragraph.replace(regex, 'ferret'));//
// Expected output: "I think Ruth's ferret is cuter than your dog!"

//const array1 = [1, 2, 3];

//console.log(array1.includes(2)); //it is always confirming that the element is included or not.

const url = new String('https://krushnadesigns.com')
//console.log(url);//[String: 'https://krushnadesings.com']
//console.log(url.includes('desing'));//false
//console.log(url.valueOf());//https://krushnadesigns.com

const str = 'The quick brown fox jumps over the lazy dog.';
//console.log(str.split(" "));
//Split actually means to cut the sepator to the limit(type of index) we have given.

const strMonth = 'jan,feb,mar,apr.may,june,aug';
//console.log(strMonth.split((",","."),4));//wrong expression for split
//console.log(strMonth.split(/[,\.]/, 4));//regular expression for split



const myString = "Hello 1 word. Sentence number 2. Sentence number 3. Sentence number 4. Sentence number 2. jan, feb, mar, 12";
//console.log(myString.split(/(\d)/)); //capturing strings between the numbers only







// There are too many prototype methods available in the browser and the main objective is to master the methods 


