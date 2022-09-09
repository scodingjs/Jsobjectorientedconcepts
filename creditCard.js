let creditCard = {
    _name : "Ram", //Convention to name private variable, accessor 
    cvv : "322",
    _zipcode:"0000",
    //properties should manipulate them.
    get ccname(){
        return this._name;
    },

    set ccname(value){
        this._name = value;
    }
}
console.log(creditCard.ccname)
creditCard.ccname = "Sita"
console.log(creditCard.ccname)
// The set and get are not methods they are called accessor properties
//It is not required always, special logic performed before saving to DB


//Only having setter -- write only
//only having getter -- read only

//Enumerable
console.log(creditCard.propertyIsEnumerable("cvv")) // By default this is true

// Define an Attribute for an Object
Object.defineProperty(creditCard,"cvv",{
    enumerable:false // if we do Object.Keys this property is not available
})


console.log("cvv" in  creditCard,"Enumeravle", creditCard)
console.log(creditCard.propertyIsEnumerable("cvv"))


///configurable

console.log(creditCard)
Object.defineProperty(creditCard,"name",{
   configurable:false 
})
 creditCard.name = "Krish"
console.log("name" in  creditCard,"Config",creditCard)

// Object.defineProperty(creditCard,"cvv",{
//     configurable:true // this throws error once false cannot change to // DEfault Configurable is false
//  })

// Accessor Property
Object.defineProperty(creditCard,"zipcode",{
    get: function(){
        return this._zipcode
    },
    set: function(value){
        this._zipcode = value
    },
    enumerable: true,
    configurable:true
})
creditCard.zipcode = "8011"
console.log("zipcode" in creditCard, creditCard)
console.log(creditCard.propertyIsEnumerable("zipcode"),creditCard)
delete creditCard._zipcode
console.log("zipcode" in creditCard, creditCard)
console.log(creditCard.propertyIsEnumerable("zipcode"),creditCard)

//So when you make it enumerable even if you delete the property cannot be deleted. When false -- key/value misses and doesnt' show up like CVV
//Configurable You cannot change the value

