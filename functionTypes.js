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