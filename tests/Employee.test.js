import { describe, expect, test } from '@jest/globals';
import Employee from '../lib/Employee.js';


describe('Employee Class', () => {
    let newEmployee = new Employee('bob', 734, `me@email.com`);
    test('makes object with a 3 arguments', () => {
        expect(newEmployee).toMatchObject({ name: `bob`, id: 734, "email": "me@email.com", role: "Employee", });
    });

    test('creates is instance of Employee', () => {
        expect(newEmployee).toBeInstanceOf(Employee);
    });

    describe('get functions', () => {
        test('getName returns name', () => {
            expect(newEmployee.getName()).toEqual('bob');
        });
        test('getID returns Employee', () => {
            expect(newEmployee.getId()).toEqual(734);
        });
        test('getEmail returns Employee', () => {
            expect(newEmployee.getEmail()).toEqual('me@email.com');
        });
        test('getRoles returns Employee', () => {
            expect(newEmployee.getRole()).toEqual('Employee');
        });
    });



});