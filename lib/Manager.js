import Employee from "./Employee.js";

export default class Manager extends Employee {
    role = 'Manager';
    officeNumber;
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}