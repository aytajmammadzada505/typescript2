interface Person {
    name: string,
    age: number
}

interface Employee extends Person {
    salary: number,
    department: string
}

const employee1: Employee = {
    name: "Marc",
    age: 34,
    salary: 600,
    department: "Engineering"
};

const employee2: Employee = {
    name: "Jack",
    age: 36,
    salary: 650,
    department: "Marketing"
};

const employees: Employee[] = [employee1, employee2];

const employeeNames = employees.map(worker => worker.name);
console.log(employeeNames);
