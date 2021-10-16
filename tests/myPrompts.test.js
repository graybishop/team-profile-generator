import myPrompts from "../src/myPrompts.js";
import { describe, expect, it, jest, beforeEach, afterEach } from "@jest/globals";
import inquirer from "inquirer";
import fs from "fs";


let testSession = new myPrompts();
beforeEach(() => {
    testSession = new myPrompts();
    jest.spyOn(testSession, 'writeHtmlFile').mockImplementation();
});

describe('MyPrompts', () => {
    it('should make employeesList an empty array', () => {
        expect(testSession.employeesList).toEqual([]);
    });
    describe('openingQuestions()', () => {
        let inqSpy, logSpy;
        beforeEach(async () => {
            jest.spyOn(testSession, 'askForMoreEmployees').mockImplementation();
            inqSpy = jest.spyOn(inquirer, 'prompt').mockImplementation(() => {
                return { name: 'bob', id: 1, email: 'Test@email.com' };
            });
            logSpy = jest.spyOn(console, 'log').mockImplementation();
            await testSession.openingQuestions();

        });
        afterEach(() => {
            inqSpy.mockRestore();
            logSpy.mockRestore();
        });

        it('should call askForMoreEmployees at the end', async () => {

            expect(testSession.askForMoreEmployees).toHaveBeenCalled();
        });
        it('should add a manager to the list after it is done', async () => {
            expect(testSession.employeesList.length).toBe(1);
            expect(testSession.employeesList[0]).toEqual({ name: 'bob', id: 1, email: 'Test@email.com', role: 'Manager', officeNumber: undefined });
        });
        it('should print to log a message at the start and the end', async () => {

            expect(logSpy).toHaveBeenCalledTimes(2);
        });
    });

    describe('askForMoreEmployees()', () => {
        afterEach(() => {
            jest.spyOn(inquirer, 'prompt').mockClear();
        }

        );

        it('should prompt the user', async () => {
            let promptConfirmSpy = jest.spyOn(inquirer, 'prompt').mockReturnValue({ more: true });
            jest.spyOn(testSession, "whatKindOfEmployee").mockReturnValue(null);
            await testSession.askForMoreEmployees();
            expect(promptConfirmSpy).toHaveBeenCalledTimes(1);
        });
        it('call whatKind of employee if the user answers yes', async () => {
            jest.spyOn(inquirer, 'prompt').mockReturnValue({ more: true });

            let whatKindSpy = jest.spyOn(testSession, "whatKindOfEmployee").mockReturnValue(null);
            let writeFileSpy = jest.spyOn(testSession, "writeHtmlFile");
            await testSession.askForMoreEmployees();
            expect(whatKindSpy).toHaveBeenCalled();
            expect(writeFileSpy).not.toHaveBeenCalled();
        });
        it('call writeHTMLFile if the user answers no', async () => {
            jest.spyOn(inquirer, 'prompt').mockReturnValue({ more: false });

            let whatKindSpy = jest.spyOn(testSession, "whatKindOfEmployee");
            let writeFileSpy = jest.spyOn(testSession, "writeHtmlFile").mockReturnValue(null);
            await testSession.askForMoreEmployees();
            expect(whatKindSpy).not.toHaveBeenCalled();
            expect(writeFileSpy).toHaveBeenCalled();
        });
    });

    describe('whatKindOfEmployee()', () => {
        beforeEach(() => {
            jest.spyOn(console, 'log').mockImplementation();
        });

        afterEach(() => {
            jest.spyOn(inquirer, 'prompt').mockClear();
            jest.spyOn(testSession, 'inputEmployeeInfo').mockRestore();
        });

        it('should prompt the user', async () => {
            let newSpy = jest.spyOn(inquirer, 'prompt').mockReturnValue({ more: false });

            jest.spyOn(testSession, 'inputEmployeeInfo').mockReturnValue(9);
            await testSession.whatKindOfEmployee();
            expect(newSpy).toHaveBeenCalledTimes(1);
        });
        describe('given user selection, should call InputEmployeeInfo with', () => {
            // jest.spyOn(testSession, 'inputEmployeeInfo').mockReturnThis()
            it('Engineer', async () => {
                jest.spyOn(inquirer, 'prompt').mockReturnValue({ type: 'Engineer' });
                // jest.spyOn(testSession, 'inputEmployeeInfo').mockRestore()
                let test = jest.spyOn(testSession, 'inputEmployeeInfo');
                console.log(test);
                await testSession.whatKindOfEmployee();
                expect(test).toHaveBeenCalledWith('Engineer');
            });
            it('Manager', async () => {
                jest.spyOn(inquirer, 'prompt').mockReturnValue({ type: 'Manager' });
                // jest.spyOn(testSession, 'inputEmployeeInfo').mockRestore()
                let test = jest.spyOn(testSession, 'inputEmployeeInfo');
                console.log(test);
                await testSession.whatKindOfEmployee();
                expect(test).toHaveBeenCalledWith('Manager');
            });
            it('Intern', async () => {
                jest.spyOn(inquirer, 'prompt').mockReturnValue({ type: 'Intern' });
                // jest.spyOn(testSession, 'inputEmployeeInfo').mockRestore()
                let test = jest.spyOn(testSession, 'inputEmployeeInfo');
                console.log(test);
                await testSession.whatKindOfEmployee();
                expect(test).toHaveBeenCalledWith('Intern');
            });

        });
    });

    describe('inputEmployeeInfo(type)', () => {
        beforeEach(() => {
            jest.spyOn(console, 'log').mockImplementation();
            jest.spyOn(testSession, 'askForMoreEmployees').mockReturnValue(90);
        });

        afterEach(() => {
            jest.spyOn(inquirer, 'prompt').mockRestore();
            jest.spyOn(testSession, 'askForMoreEmployees').mockRestore();
            jest.spyOn(console, 'log').mockClear()
        });

        it('should prompt the user', async () => {
            let newSpy = jest.spyOn(inquirer, 'prompt').mockReturnValue({ more: false });
            const testType = 'Engineer';

            await testSession.inputEmployeeInfo(testType);
            expect(newSpy).toHaveBeenCalledTimes(1);
        });
        it('should throw an error if given a bad type', () => {
            jest.spyOn(inquirer, 'prompt').mockReturnValue({ more: false });
            const testType = 'None Valid Type';
            expect(testSession.inputEmployeeInfo(testType)).rejects.toBe("Employee Type Given Invalid: Default of switch statement");
        });
        describe('when given a type and user input, it should add', () => {
            it('Engineer to the employeeList', async () => {
                jest.spyOn(inquirer, 'prompt').mockReturnValue({name:'engy', id:23, email:'test@test.com', github:'tigbuh'});
                const testType = 'Engineer';
                await testSession.inputEmployeeInfo(testType);
                expect(testSession.employeesList[0]).toMatchObject({role:'Engineer', name:'engy'})
            });
            it('Manager to the employeeList', async () => {
                jest.spyOn(inquirer, 'prompt').mockReturnValue({name:'sue', id:23, email:'test@test.com', github:'tigbuh'});
                const testType = 'Manager';
                await testSession.inputEmployeeInfo(testType);
                expect(testSession.employeesList[0]).toMatchObject({role:'Manager', name:'sue'})
            });
            it('Intern to the employeeList', async () => {
                jest.spyOn(inquirer, 'prompt').mockReturnValue({name:'rod', id:23, email:'test@test.com', github:'tigbuh'});
                const testType = 'Intern';
                await testSession.inputEmployeeInfo(testType);
                expect(testSession.employeesList[0]).toMatchObject({role:'Intern', name:'rod'})
            });
        });
    });

    describe('writeHTMLFile', () => {
        const testObj = new myPrompts()
        it('should call fs.write file with full arguments', async () => {
            
            let fsMock = jest.spyOn(fs, 'writeFile').mockImplementation()
            // let htMock = jest.spyOn(createFullHTMl, 'createFullHTMl').mockImplementation()
            // const fakeArr =[1,2,3]
            let teller = await testObj.writeHtmlFile([{ name: 'bob', id: 1, email: 'Test@email.com', role: 'Manager', officeNumber: 123131 }])
            expect(fsMock).toHaveBeenCalled()
            return teller
        });
    });

});
