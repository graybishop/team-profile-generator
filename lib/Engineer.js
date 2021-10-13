import Employee from "./Employee";

export default class Engineer extends Employee{
    name
    id
    email
    role = 'Engineer'
    github
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }

    get github(){
        return this.github
    }
}