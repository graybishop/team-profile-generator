import Employee from "./Employee";

export default class Manager extends Employee{
    name
    id
    email
    role = 'Manager'
    officeNumber
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    get officeNumber(){
        return this.officeNumber
    }
}