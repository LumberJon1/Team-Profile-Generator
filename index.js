//requires
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Prompts = require("./lib/Prompts.js");


//Function that generates the HTML page from answer object
const generatePage = function() {
    //Run the code from src folder
};

const prompt = new Prompts;
prompt.promptEmployee()

// //Array that holds employees
// employeeArray = [];

// //Prompt user for employees...
// //Section for the manager
// const managerPrompt = () => {
//     return inquirer.prompt([
//             {
//             type: "text",
//             name: "name",
//             message: "Enter the manager's name"
//         },
//         {
//             type: "text",
//             name: "id",
//             message: "Enter the manager's employee ID number."
//         },
//         {
//             type: "text",
//             name: "email",
//             message: "Enter the manager's work email address."
//         },
//         {
//             type: "text",
//             name: "officeNumber",
//             message: "Enter the manager's office number."
//         }
//     ])
// }

// //Prompt name, employee ID, email, and office number
// const promptEmployee = () => {
//     return inquirer.prompt([
//         {
//             type: "list",
//             name: "addEmployee",
//             message: "Choose to add an engineer or intern to the team, or finish building.",
//             choices: ["Engineer", "Intern", "Finish"]
//         }
//     ])
// }

// const addEmployee = (employee) => {
    
//     if (employee.addEmployee === "Engineer") {
//         //Add an engineer
//         console.log("Adding an engineer to the team.");
//         promptEmployee();
//     }
//     else if (employee.addEmployee === "Intern") {
//         //Add intern
//         console.log("Adding an intern to the team.");
//         promptEmployee();
//     }
//     else {
//         return;
//     }
// }
// //IF Engineer, prompt for name, ID, email, and github

// //Else if Intern, prompt for name, ID, email, and school

// //When finished, generate the HTML

// managerPrompt()
// .then(answer => {
//     employeeArray.push(answer);
//     promptEmployee().then(answer => {
//         if (answer.addEmployee != "Finish") {
//             console.log("Not finished.")
//         }    
//     });
// });