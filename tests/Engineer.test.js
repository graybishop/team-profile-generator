import { describe, expect, test } from '@jest/globals';
import Engineer from '../lib/Engineer';


describe('Engineer Class (extension of Employee)', () => {
    let newEngineer = new Engineer('a', 1, `me@email.com`, 'b');

    test('makes object with a 4 properties', () => {
        expect(newEngineer).toMatchObject({ name: `a`, id: 1, "email": "me@email.com", role: "Engineer", github: 'b'});
    });

    test('creates is instance of Engineer', () => {
        expect(newEngineer).toBeInstanceOf(Engineer);
    });

    describe('get functions', () => {
        test('getGitHub returns github', () => {
            expect(newEngineer.getGitHub()).toEqual('b');
        });
    });

});