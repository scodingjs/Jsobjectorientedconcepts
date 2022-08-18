//Number,String,Boolean
//

let greet="Keep looking up… that’s the secret of life."
let greet2="Being positive is a sign of intelligence"
let subObject = greet.substring(4,6);

greet2.author  ="Maxime Lagacé" // This line doesn't throw an error as Js treats everything as an object. but the object is destroyed on the next line and hene you can check the console

console.log(greet,greet2, greet2.author)