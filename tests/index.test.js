import * as info from "team-profile-generator";
import { expect, jest } from "@jest/globals";
import inquirer from "inquirer";

let whatIs = jest.mock("team-profile-generator", ()=>{
    return {
        __esModule: true,
        default: jest.fn(() => 42),
        askForMoreEmployees:jest.fn(() => 45)
    }
})


// jest.mock("team-profile-generator")



test('if the user pick yes the callback should run ', async () => {
    jest.spyOn(inquirer,'prompt').mockImplementation(questions => {
        return { more: true, test: `help` }
    })
    
    let result = await info.askForMoreEmployees()

    expect(result).toBe(true)
});