import Employee from "./Employee";

export default class Intern extends Employee{
    name
    id
    email
    role = 'Intern'
    school
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }

    get school(){
        return this.school
    }
}