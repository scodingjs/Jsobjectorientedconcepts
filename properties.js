let student = new Object();
student.name = "Ram";
student.gpa = "3.95";
student.major = "Math";
student.minor1 = "Physics";
student.minor2 ="Chemistry";
student.minor3 = "Biology";
console.log(student.propertyIsEnumerable("name"))
console.log(student.propertyIsEnumerable("length"))