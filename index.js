import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import Manager from "./lib/Manager.js";
import { createFullHTMl } from "./src/html-builder.js";

const dude = new Engineer(`Bob`,345,`fake@gmail.com`,`mastercoder`);
const dude2 = new Intern(`June` ,345 ,`fake@gmail.com`,`UCF`);
const dude3 = new Manager(`Pedguin` ,347 ,`fake@live.com`, 101);

let employees = [dude, dude2, dude3]

console.log(createFullHTMl(employees))