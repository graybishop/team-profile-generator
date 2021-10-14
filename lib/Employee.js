export default class Employee {
    name;
    id;
    email;
    role = 'Employee';
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return this.role;
    }
}
