console.log('--Below are the excercises for day1--');

console.log('--1. Write a single line comment which says, comments can make code readable--');
//comments can make code readable 

console.log('--2. Write another single comment which says, Welcome to 30DaysOfJavaScript--');
//welcome to 30DaysOfJavaScript
console.log('--3. Write a multiline comment which says, comments can make code readable, easy to reuse and informative--');
/**comments can make code readable
 * easy to reuse and 
 * informative
 */
console.log('4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types');
/*though the instructions demands of creating variable.js file i chose to not open a new .js file for each and avery instruction
*because it will be over populated with plenty of files.Therefore i'm rather going to do it in a short way for the moment at list
*/
let myStringVariable='single quotation';
let myBooleanVariable=true;
let myUndefinedVariable=undefined;
let myObjectVariable=null;

console.log('--5.Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable--');
const a=12; //typeof a = number
const b='12'; //typeof b = string
const c=false; //typeof c = boolean
let d;       //typeof d = undefined 
const e=null; //typeof e = object
console.log(typeof a+' '+a,typeof b+' '+b,typeof c+' '+c,typeof d+' '+d,typeof e+' '+e,);

console.log('--Declare four variables without assigning values--');
let notAssigned1;
let notAssigned2;
let notAssigned3;
let notAssigned4;

console.log('--Declare four variables with assigned values--');

const myPassion1='traveling';
let programmingSkills=undefined;
const crazyAboutAdventure=true;
let savings=null;

console.log('--Declare variables to store your first name, last name, marital status, country and age in multiple lines--');
let firstName='Michael';
let lastName='Tesfay';
let isMarried=true;
let country='Belgium';
let age=31;

console.log('--Declare variables to store your first name, last name, marital status, country and age in a single line--');
//i tried to modify the variable names in order to not commit a 'symantic error'.JS doesn't allow us to 'declare' two variables with exactly the same name.(two times)
//but of course we can re-assigne our variables with a different value again and again
let myFirstName='Michael'; myLastName='Tesfay'; isSingle=false; residence='Belgium'; age=31;

console.log('--Declare two variables myAge and yourAge and assign them initial values and log to the browser console.--');
let myAge=31;
let yourAge=28;
console.log(myAge,yourAge);