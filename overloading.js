function add(num1, num2, num3) {
    return num1 + num2 + num3
}

function add(num1, num2) {
    return num1 + num2
}

console.log(add(12, 11, 11));
console.log(add(12, 11));
//Since JS supports varrying arguments. 
// The above will not work since the second function was loaded last , that will be exectutes;
//Hence we can rewrite in the following way - using "arguments" - to handle overloading concepts

function add() {
    let argumentsList = Object.values(arguments)
    return argumentsList.reduce(addUp, 0)
    console.log(argumentsList)
    function addUp(sum, element) {
       return sum + element
    }

}

// This is just using simple arguments in for loop
function addArguments() {
    let argumentsTotal = 0;
    for(let i=0;i<arguments.length;i++){
        argumentsTotal += arguments[i]
    }
    return argumentsTotal;
}

console.log(addArguments(132, 111, 11));
console.log(addArguments(121, 11));
console.log(addArguments())