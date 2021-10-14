import Employee from "./Employee.js";

export default class Intern extends Employee {
    role = 'Intern';
    school;
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}