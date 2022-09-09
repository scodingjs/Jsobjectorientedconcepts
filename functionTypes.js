// Example of Hoisting
// console.log(`ODD ${printOdd(20)}`) // This throws undefined error
console.log(`Even ${printEven(30)}`)  //

function printEven(n){
    let output = ""

    for(let i=0;i<=n;i=i+2){
        output += ` ${i}`
    }
    return output

}

var printOdd= function(n){
    let output = ""

    for(let i=1;i<=n;i=i+2){
        output += ` ${i}`
    }
    return output

}



console.log(`ODD ${printOdd(10)}`)
console.log(`Even ${printEven(10)}`)

//console.log(multiply(1222,333)) // Gives error message
console.log(product(121,1211))
var multiply =  function(a,b){
    return a*b
}

function product(a,b){
    return a*b
}

console.log(multiply(1222,333)) // Works fine .
console.log(product(121,1211))