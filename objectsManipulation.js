//Objects - 
//JS allows to add and remove properties whenever needed
// Add
//Check
// Remove
// Reading
// Accessor - Encapsulation
// Object Property Attribute
// Stop Modification
//Seal
//Freeze
const axios = require("axios")
var topLanguages = {
    name: "Javascript" //[[Put]] JS engine invokes the Put to allocate memory for the property

}

var topLanguageTrending = new Object()
topLanguageTrending.name = "React js" // [[Put]]
topLanguages.description = "Web development made easy" //[[Put]] since new property is allocated
topLanguages.name = "Powerfull Language JS" //[[Set]] // No wxtra space allocated, already existing space is used and the value for the property is set.

console.log(topLanguageTrending)
console.log(topLanguages)

// To see if a property exist in the Object --- the "in" operator
console.log("in operator to check properties in the object")
console.log("name" in topLanguageTrending)
console.log("name" in topLanguages)
console.log("description" in topLanguageTrending)
console.log("description" in topLanguages)
console.log("toString" in topLanguageTrending) // true if it is inherited or so.
console.log(topLanguageTrending.hasOwnProperty("toString")) // to check directly owned
//The delete

delete topLanguageTrending.description;
console.log(topLanguageTrending)
console.log(topLanguages)

axios.get(`https://www.googleapis.com/books/v1/volumes?q=coding`)
    .then(results => {

        // console.log(results)
        // for (let listProperty in results.data.items) {
        //     console.log(listProperty)
        // }

        let keyList = Object.keys(results.data.items[0]) // When Object.Keys are used on Arrays it gives the index values

        keyList.forEach(key => console.log(key))

    }).catch(err => console.error(err))

