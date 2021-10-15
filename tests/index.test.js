it('placeholdertest', () => {
    
});

/*

// import * as info from "team-profile-generator";
import { expect, jest } from "@jest/globals";
import inquirer from "inquirer";
import fs from 'fs'
// import { whatKindOfEmployee, writeHtmlFile, inputEmployeeInfo, askForMoreEmployees } from "../index.js";
import * as index from "../index.js";
import anything from "../lib/Employee.js";

// jest.mock('../lib/Employee.js')
console.log(anything)

describe('employee should return something', () => {
    it('should return `employee`', () => {
        let employee = new anything()
        jest.spyOn(employee, 'getRole').mockReturnValue(7)
        expect(employee.getRole()).toBe('Employee')
    });
});
*/


//TODO: CONVERT TO OBJECT
// jest.mock("../index.js", () => {
//     return {
//         // __esModule: true,
//         // default: jest.fn(() => 42),
//         askForMoreEmployees: jest.fn(() => { throw `i've changed`; }),
//         whatKindOfEmployee: jest.fn(() => { throw `i've changed`; }),

//     };
// });

// console.log(index)
// console.log(inquirer)
// console.log
// [Module: null prototype] {
//   askForMoreEmployees: [AsyncFunction: askForMoreEmployees],
//   inputEmployeeInfo: [AsyncFunction: inputEmployeeInfo],
//   whatKindOfEmployee: [AsyncFunction: whatKindOfEmployee],
//   writeHtmlFile: [Function: writeHtmlFile]
// }

//   at tests/index.test.js:18:9

// console.log
// {
//   prompts: {},
//   Separator: [class Separator] { exclude: [Function (anonymous)] },
//   ui: {
//     BottomBar: [class BottomBar extends UI],
//     Prompt: [class PromptUI extends UI]
//   },
//   createPromptModule: [Function (anonymous)],
//   prompt: [Function: promptModule] {
//     prompts: {
//       list: [class ListPrompt extends Prompt],
//       input: [class InputPrompt extends Prompt],
//       number: [class NumberPrompt extends InputPrompt],
//       confirm: [class ConfirmPrompt extends Prompt],
//       rawlist: [class RawListPrompt extends Prompt],
//       expand: [class ExpandPrompt extends Prompt],
//       checkbox: [class CheckboxPrompt extends Prompt],
//       password: [class PasswordPrompt extends Prompt],
//       editor: [class EditorPrompt extends Prompt]
//     },
//     registerPrompt: [Function (anonymous)],
//     restoreDefaultPrompts: [Function (anonymous)]
//   },
//   registerPrompt: [Function (anonymous)],
//   restoreDefaultPrompts: [Function (anonymous)]
// }

// jest.spyOn(index,'askForMoreEmployees')

// console.log(askForMoreEmployees)
// console.log(index.askForMoreEmployees)



// test('if the user pick yes the callback should run ', async () => {

//     jest.spyOn(inquirer, 'prompt').mockImplementation(questions => {
//         return { more: true, test: `help` };
//     });
//     console.log(inquirer)

//     let result = await askForMoreEmployees();

//     expect(result).toBe(false);
// });