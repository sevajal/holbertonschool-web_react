interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [property: string]: any;
}
  
interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    firstName: string;
    lastName: string;
}

function printTeacher(teacherToPrint: printTeacherFunction) {
    return (`${teacherToPrint.firstName[0]}. ${teacherToPrint.lastName}`);
}
  
interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
  
class StudentClass implements Student {
    firstName: string;
    lastName: string;
  
    constructor (firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework (): string {
      return ("Currently working");
    }
  
    displayName(): string {
      return (this.firstName);
    }
}
