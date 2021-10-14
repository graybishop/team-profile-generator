import inquirer from "inquirer";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import Manager from "./lib/Manager.js";
import { createFullHTMl } from "./src/html-builder.js";

// test objects
// const dude = new Engineer(`Bob`, 345, `fake@gmail.com`, `mastercoder`);
// const dude2 = new Intern(`June`, 345, `fake@gmail.com`, `UCF`);
// const dude3 = new Manager(`Pedguin`, 347, `fake@live.com`, 101);
// let employees = [dude, dude2, dude3];
// console.log(employees)

//global that will hold all of the employees inputted
let employeesList = [];

const openingQuestions = async () => {
    console.log('Tell us about your Team Leader.');
    let answers = await inquirer.prompt(
        [
            {
                name: `name`,
                type: `input`,
                message: `Team Leader's name:`
            },
            {
                name: `id`,
                type: `input`,
                message: `Team Leader's ID:`
            },
            {
                name: `email`,
                type: `input`,
                message: `Team Leader's email:`
            },
            {
                name: `officeNumber`,
                type: `input`,
                message: `Team Leader's Office Number:`
            },
        ]
    );
    const leader = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employeesList.push(leader);

    let moreEmployees = await inquirer.prompt([{
        name: `more`,
        type: 'confirm',
        message: `Do you have more employees?`
    }]);

    let { more } = moreEmployees;

    more ? whatKindOfEmployee() : console.log(createFullHTMl(employeesList));
};

openingQuestions();

const whatKindOfEmployee = async () => {
    console.log('Great!');
    let answers = await inquirer.prompt([{
        type: `list`,
        name: `type`,
        message: `What kind of employee?`,
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ]
    }]);

    let { type } = answers;

    switch (type) {
        case 'Engineer':
            console.log('you chose Engineer');
            break;
        case 'Intern':
            console.log('you chose Engineer');
            break;
        case 'Intern':
            console.log('you chose Engineer');
            break;
        default:
            throw console.error(`you cannot get here`);
    }

};

const inputEmployeeInfo = async (type) => {
    let questions = [
        {
            name: `name`,
            type: `input`,
            message: `Employee's name:`
        },
        {
            name: `id`,
            type: `input`,
            message: `Employee's ID:`
        },
        {
            name: `email`,
            type: `input`,
            message: `Employee's email:`
        },
    ];

    questions.push(
        {
            name: `officeNumber`,
            type: `input`,
            message: `Team Leader's Office Number:`
        });

    let answers = await inquirer.prompt(questions);
};