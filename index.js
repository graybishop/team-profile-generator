import inquirer from "inquirer";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import Manager from "./lib/Manager.js";
import createFullHTMl from "./src/html-builder.js";
import fs from 'fs';

/**
 * Global Array for holding employees
 */
let employeesList = [];

/**
 * Prompts the user for team leader information, passes the information into a
 * new Manager, then moves on to next prompt with continuesFn.
 * @param {function} continuesFn The next function in the chain of user input. 
 */
const openingQuestions = async (continuesFn) => {
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
    console.log('Thanks for the info!');
    const leader = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employeesList.push(leader);

    continuesFn();
};

/**
 * Prompts the user to confirm (Y/n) if they have more employees to add to their page.
 * If the use answers yes, program moves onto whatKindOfEmployee(). If they say no, the program
 * moves onto writeHTMLFile() and ends the prompts. 
 */
const askForMoreEmployees = async () => {

    let answer = await inquirer.prompt([{
        name: `more`,
        type: 'confirm',
        message: `Do you have more employees?`
    }]);

    answer.more ? whatKindOfEmployee() : writeHtmlFile(employeesList);
    return answer.more
};

/**
 * Prompts the user to choose their employee type, 
 * then passes that type to the inputEmployeeInfo() function
 */
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

    inputEmployeeInfo(type);

};

/**
 * Prompts the user for the information of the given type of employee, 
 * then generates a new employee subclass instance based on that input.
 * @param {'Engineer'|'Intern'|'Manager'} type Type of employee to ask about
 */
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

    const engineerQuestion = { name: `github`, type: `input`, message: `Engineer's GitHub account:` };
    const internQuestion = { name: `school`, type: `input`, message: `Intern's school:` };
    const managerQuestion = { name: `officeNumber`, type: `input`, message: `Manager's Office Number:` };

    switch (type) {
        case 'Engineer':
            questions.push(engineerQuestion);
            break;
        case 'Intern':
            questions.push(internQuestion);
            break;
        case 'Manager':
            questions.push(managerQuestion);
            break;
        default:
            throw console.error(`you cannot get here either`);
    }

    console.log(`Okay, got it!`);
    let answers = await inquirer.prompt(questions);

    let newEmployee = type == 'Engineer' ? new Engineer(answers.name, answers.id, answers.email, answers.github) :
        type == 'Intern' ? new Intern(answers.name, answers.id, answers.email, answers.school) :
            new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

    employeesList.push(newEmployee);

    askForMoreEmployees();
};

/**
 * Reads the global Array employeesList to generate an HTML file in ./dist/. 
 * Passes employeesList to createFullHTML for the string.
 */
const writeHtmlFile = (arr) => {
    fs.writeFile(`./dist/index.html`, createFullHTMl(arr), err => {
        err ? console.error(err) : console.log(`File created. Check /dist/.`);
    });
};

// openingQuestions(askForMoreEmployees);

export {whatKindOfEmployee, writeHtmlFile, inputEmployeeInfo,askForMoreEmployees}