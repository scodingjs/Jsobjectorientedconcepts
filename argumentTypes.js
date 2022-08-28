function cart(){
    var cartTotal = 0;
    // console.log(arguments, arguments.length)
    var checkout = [];
   if(arguments.length>0)  {
       
       let argKeys =  Object.values(arguments[0])
        checkout = argKeys.map(ele => ({...ele,item_total: ele.quantity * ele.price}))
         checkout.forEach(ele => cartTotal += ele.item_total)
    }
    console.log(checkout)
    return cartTotal
}  

function productList(){
     var products =""
    for(let i=0;i<arguments.length;i++){
        products += arguments[i]
    }
   
    return products
} 

console.log("Checkout for Person1")
console.log("--------------------")
console.log(cart([
    {item:"flowers",quantity:12,price:12},
    {item:"fruits",quantity:12,price:4},
    {item:"chooclate",quantity:1,price:15},
    {item:"icecream",quantity:3,price:42},
    {item:"pops",quantity:1,price:32},
]))

console.log("Checkout for Person2")
console.log("--------------------")
console.log(cart([
    {item:"Chips",quantity:32,price:2},
    {item:"Soda",quantity:16,price:14},
    {item:"Nuts",quantity:11,price:15},
   
]))

console.log("Checkout for Person3")
console.log("--------------------")
console.log(cart([
    {item:"Chips",quantity:32,price:2},
    {item:"Soda",quantity:16,price:14},
    {item:"Nuts",quantity:11,price:15},
    {item:"Paper cups",quantity:32,price:5},
    {item:"plates",quantity:160,price:3},
    {item:"HAts",quantity:21,price:25}
]))

console.log("Checkout for Person4")
console.log("--------------------")
console.log(cart())

console.log(productList(["flowers","fruits","jam","nuts"]))
console.log(productList(["vessel","spoon","stainer","blender","whish","fryer","grinder"]))
console.log(productList())