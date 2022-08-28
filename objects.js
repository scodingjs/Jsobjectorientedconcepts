//Power of this
var student1 = {
    id:1,
    name:"Test",
    display: function(){
        console.log(`Student: Id:${this.id} Name:${this.name} `)
    }
}
function displayStudent(){
    console.log(`Student: Id:${this.id} Name:${this.name} `)
}
var student2 = {
    id:2,
    name:"Testing",
    display: displayStudent
}
var student3 = {
    id:3,
    name:"Checking",
    display: displayStudent
}


student1.display()
student2.display()
student3.display()

displayStudent()