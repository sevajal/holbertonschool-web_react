interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Sebastian",
    lastName: "Carvajal",
    age: 41,
    location: "Cali"
}

const student2: Student = {
    firstName: "Diana Patricia",
    lastName: "Rivera",
    age: 40,
    location: "Cali"
}

const studentList = [student1, student2];

const studentsTable = document.createElement("table");
studentsTable.innerHTML = 
    `<tr>
        <th>First name</th>
        <th>Location</th>
    </tr>`

for (const student of studentList) {
    const studentRow = document.createElement('tr');
    studentRow.innerHTML = 
        `<td>${student.firstName}</td>
        <td>${student.location}</td>`
    studentsTable.appendChild(studentRow);
}

document.body.appendChild(studentsTable);
