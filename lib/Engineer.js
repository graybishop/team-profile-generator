import Employee from "./Employee.js";

export default class Engineer extends Employee {
    role = 'Engineer';
    github;
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    get github() {
        return this.github;
    }
}