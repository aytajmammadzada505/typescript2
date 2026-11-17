interface Student {
    id: number,
    name: string,
    age: number,
    isActive: boolean
};
type Course = {
    title: string,
    duration: string,
    price: number
}
const contacts: [string, number] = ["student@mail", 994763927];


const students: Student[] = [{
    id: 1,
    name: "Yelena",
    age: 20,
    isActive: true
}, {
    id: 2,
    name: "Tony",
    age: 23,
    isActive: true
}, {
    id: 3,
    name: "Steve",
    age: 25,
    isActive: false
}]

const activeStudents = students.filter(stu => stu.isActive);
const studentNames = students.map(emp => emp.name);

const myCourse: Course = {
    title: "hero academy",
    duration: "8 months",
    price: 200
}

console.log(students);
console.log(activeStudents);
console.log(studentNames);
console.log(contacts);
console.log(myCourse);