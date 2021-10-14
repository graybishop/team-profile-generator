export default class Employee {
    name;
    id;
    email;
    role = 'Employee';
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        console.log(this.name)
    }

    get name() {
        return this.name;
    }
    get id() {
        return this.id;
    }

    get email() {
        return this.email;
    }

    get role() {
        return this.role;
    }

    getRole() {
        return this.role;
    }
}
