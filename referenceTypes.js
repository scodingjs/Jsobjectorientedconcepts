//This is how we can get classes
//Objects are list - collection of properties - name/value or key/value pair
//Points to memory location
// Garbage displosal - when none of the elements are pointing to the memory location
//the object is dropped. 
//ReferenceTypes - Array, Date, Error, Function, Object, RegExp

let object1 = new Object();
let colors = new Array();
let error = new Error("Invalid Data entered");
let currentDate = new Date();
let myFunc = new Function(console.log("Hello"));
let regEx = new RegExp("\\d+");

let objectCopy = object1;
object1.quote = "great leaders inspire greatness in others";
console.log(objectCopy.quote)


object1 = null;
objectCopy = null;
//using new
let person = new Object()
person.salary = 100;
console.log(person.salary)
//literal value
let flowers = {
    "june":"daisy",
    "july":"rose"
}
let patient = {
    id:1,
    name:"xtreme"
}
console.log(`${patient.name} loves ${flowers.june}, a bunch of fresh ${flowers.july}s will also help her recover fast`)
let fn = ["Jasmine","Rose","Barbie","Snow"]
let sn = new Array("Job","Kavin","Kathirvelan","Harry","Peter");
console.log(sn,fn);

function welcomeUser(welcomeUser){
    return `Good Day ${welcomeUser}`
}
var greetingsUser = new Function("name","return `Have a great start${name}`")

console.log(welcomeUser("Javascript"))
console.log(greetingsUser("HTML&CSS"))


var regExp = /\d+/;
console.log(typeof(object1),object1 instanceof Object, object1 instanceof Array)
console.log(typeof(colors), colors instanceof Array, colors instanceof Object)
console.log(typeof(error), error instanceof Error, error instanceof Object)
console.log(typeof(currentDate), currentDate instanceof Date), currentDate instanceof Object
console.log(typeof(myFunc), myFunc instanceof Function,myFunc instanceof Object)
console.log(typeof(regEx), regEx instanceof RegExp, regEx instanceof Object)