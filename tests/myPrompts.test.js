import myPrompts from "../src/myPrompts.js";
import { describe, expect, it, jest, beforeEach, afterEach } from "@jest/globals";
import inquirer from "inquirer";
// jest.mock('../src/myPrompts.js')
// jest.mock('inquirer')

let testSession
beforeEach(() => {
    testSession = new myPrompts();
});
describe('MyPrompts', () => {
    it('should make employeesList an empty array', () => {
        expect(testSession.employeesList).toEqual([]);
    });
    describe('OpeningQuestions', () => {
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
            inqSpy.mockRestore()
            logSpy.mockRestore()
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
    describe('askForMoreEmployees', () => {
        let promptConfirmSpy, whatKindSpy, writeFileSpy
        jest.spyOn(console, 'log').mockImplementation();
        beforeEach(async ()=>{
            whatKindSpy = jest.spyOn(testSession, 'whatKindOfEmployee').mockImplementation()
            writeFileSpy = jest.spyOn(testSession, 'writeHtmlFile').mockImplementation()
            await testSession.askForMoreEmployees()
            jest.spyOn(inquirer, 'prompt').mockImplementation(() => {
                return { name: 'bob', id: 1, email: 'Test@email.com' };
            });
        })
        afterEach(() => {
            whatKindSpy.mockClear()
            writeFileSpy.mockClear()
        });
        
        it('should prompt the user', () => {
            promptConfirmSpy = jest.spyOn(inquirer, 'prompt')
            expect(promptConfirmSpy).toHaveBeenCalled()
        });
        it('call whatKind of employee if the user answers yes', () => {
            
            expect(whatKindSpy).toHaveBeenCalled()
            expect(writeFileSpy).not.toHaveBeenCalled()
        });
        it('call writeHTMLFile if the user answers no', () => {
            // jest.spyOn(inquirer, 'prompt').mockReturnValue({more: false})

            expect(writeFileSpy).toHaveBeenCalled()
            expect(whatKindSpy).not.toHaveBeenCalled()
        });
    });
});
