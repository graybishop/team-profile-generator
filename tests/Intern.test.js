import Intern from "../lib/Intern.js";


describe('Engineer Class (extension of Employee)', () => {
    let newIntern = new Intern('a', 1, `them@email.com`, 'c');

    test('makes object with a 4 properties', () => {
        expect(newIntern).toMatchObject({ name: `a`, id: 1, "email": "them@email.com", role: "Intern", school: 'c'});
    });

    test('creates is instance of Intern', () => {
        expect(newIntern).toBeInstanceOf(Intern);
    });

    describe('get functions', () => {
        test('getGitHub returns github', () => {
            expect(newIntern.getSchool()).toEqual('c');
        });
    });

});