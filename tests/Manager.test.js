import Manager from "../lib/Manager.js";

describe('Engineer Class (extension of Employee)', () => {
    let newManager = new Manager('a', 1, `them@email.com`, 123);

    test('makes object with a 4 properties', () => {
        expect(newManager).toMatchObject({ name: `a`, id: 1, email: "them@email.com", role: "Manager", officeNumber: 123});
    });

    test('creates is instance of Intern', () => {
        expect(newManager).toBeInstanceOf(Manager);
    });

    describe('get functions', () => {
        test('getGitHub returns github', () => {
            expect(newManager.getOfficeNumber()).toEqual(123);
        });
    });

});