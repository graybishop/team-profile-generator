import { describe, expect } from "@jest/globals";
import { htmlOpening, htmlClosing, addHTMLCard } from "../src/html-builder.js";
import createFullHTMl from "../src/html-builder.js";

describe(`HTML Builders`, () => {
    describe(`htmlOpening`, () => {
        it(`should return a string that contains the text <!DOCTYPE html>`, () => {
            expect(htmlOpening()).toContain(`<!DOCTYPE html>`);
        });
    });
    describe(`htmlClosing`, () => {
        it(`should return a string that contains the text </html>`, () => {
            expect(htmlClosing()).toContain(`</html>`);
        });
    });
    describe(`addHTMLCard`, () => {

        it(`given an employee subclass it should return a string that contains the text <!-- card start --> and <--card end-->`, () => {
            const fakeObj = { name: `bob`, id: 734, "email": "me@email.com", role: "Engineer", };

            expect(addHTMLCard(fakeObj)).toContain(`<!-- card start -->`);
            expect(addHTMLCard(fakeObj)).toContain(`<!-- card end -->`);
        });
        describe(`given a specific role it should add the specific info to the card string`, () => {
            it('should give engineers a github section', () => {
                const fakeObj = { name: `bob`, id: 734, "email": "me@email.com", role: "Engineer", };

                expect(addHTMLCard(fakeObj)).toContain(`GitHub`);
            });
            it('should give interns a school section', () => {
                const fakeObj = { name: `bob`, id: 734, "email": "me@email.com", role: "Intern", };

                expect(addHTMLCard(fakeObj)).toContain(`School`);
            });
            it('should give Managers an office number section for engineers', () => {
                const fakeObj = { name: `bob`, id: 734, "email": "me@email.com", role: "Manager", };

                expect(addHTMLCard(fakeObj)).toContain(`Office`);
            });
            it('should throw an error if no specific role is found', () => {
                const fakeObj = { name: `a`, id: 1, "email": "me@email.com", role: "Employee", };
                expect(() => { addHTMLCard(fakeObj); }).toThrow();
            });
        });
    });
    describe('createFullHTML', () => {
        it('should return a string with <!DOCTYPE html>, </html>, and card', () => {
            const fakeObj = { name: `a`, id: 1, "email": "me@email.com", role: "Manager", };

            expect(createFullHTMl([fakeObj])).toContain(`<!DOCTYPE html>`);
            expect(createFullHTMl([fakeObj])).toContain(`</html>`);
            expect(createFullHTMl([fakeObj])).toContain(`card`);
        });
        it('should should throw if passed no arguments is empty', () => {
            const fakeObj = { name: `a`, id: 1, "email": "me@email.com", role: "Manager", };

            expect(() => { createFullHTMl(); }).toThrowError(`No arguments given to function`);
            expect(() => { createFullHTMl([fakeObj]); }).not.toThrow();
        });
    });

});