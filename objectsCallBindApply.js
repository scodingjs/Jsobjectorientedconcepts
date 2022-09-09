//Power of this
let student1 = {
    id:1,
    name:"Test",
    display: function(){
        console.log(`Display Student: Id:${this.id} Name:${this.name} `)
    }
}

let student2 = {
    id:2,
    name:"Testing",
    
}
let student3 = {
    id:3,
    name:"Checking",
   
}

this.id=4
this.name ="Global testing"

const  displayStudentGlobal = (score1,score2) => {
    console.log(`Student: Id:${this.id} Name:${this.name} Score:${score1},${score2} `)
}
function displayStudent(score1,score2){
    console.log(`Student: Id:${this.id} Name:${this.name}  Score:${score1}, ${score2}`)
}
console.log("----Arrow Functions Call ------")
displayStudentGlobal.call(student1, 100,90)
displayStudentGlobal.call(student2, 90,23)
displayStudentGlobal.call(student3,80,87)
displayStudentGlobal.call()
console.log("----Traditional functions Call -------")
displayStudent.call(student1,87,89)
displayStudent.call(student2,86,98)
displayStudent.call(student3,92,78)
displayStudent.call(82)

console.log("------------------------")

// apply works same as call except it takes an array of arguments

console.log("----Apply------")

let student11 = {
    id:11,
    name:"TestApply",
    display: function(){
        console.log(`Display Student: Id:${this.id} Name:${this.name} `)
    }
}

let student12 = {
    id:12,
    name:"TestingApply",
    
}
let student13 = {
    id:13,
    name:"CheckingApply",
   
}

console.log("----Arrow Functions Apply------")
displayStudentGlobal.apply(student11, [100,90])
displayStudentGlobal.apply(student12, [90,23])
displayStudentGlobal.apply(student13,[80,87])
displayStudentGlobal.apply()
console.log("----Traditional functions Apply -------")
displayStudent.apply(student11,[87,89])
displayStudent.apply(student12,[86,98])
displayStudent.apply(student13,[92,78])
displayStudent.apply(82)

console.log("---------Bind-----------")

let student14 = {
    id:14,
    name:"TestingBind",
    
}
let student15 = {
    id:15,
    name:"CheckingBind",
   
}

let bst1 = displayStudent.bind(student14,[87,67,89])
let bst2 = displayStudent.bind(student15,[86,83,98,98])

bst1()
bst2()

bst2.displayStudent = bst1.displayStudent
bst1()
bst2()