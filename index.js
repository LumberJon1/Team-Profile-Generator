//requires
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Prompts = require("./lib/Prompts.js");



//Array that holds employees
const employeeArray = [];

//Function that generates the HTML page from answer object
const generatePage = function() {
    //Run the code from src folder
    
};

//Prompt user for employees...
//Section for the manager
const managerPrompt = () => {
    return inquirer.prompt([
            {
            type: "text",
            name: "name",
            message: "Enter the manager's name"
        },
        {
            type: "text",
            name: "id",
            message: "Enter the manager's employee ID number."
        },
        {
            type: "text",
            name: "email",
            message: "Enter the manager's work email address."
        },
        {
            type: "text",
            name: "officeNumber",
            message: "Enter the manager's office number."
        }
    ])
}

//Prompt name, employee ID, email, and office number
const promptEmployee = () => {
    inquirer.prompt(
        {
            type: "list",
            name: "addEmployee",
            message: "Choose to add an engineer or intern to the team, or finish building.",
            choices: ["Engineer", "Intern", "Finish"]
        }
    ).then(function(answer) {
        console.log("Answer: "+answer.addEmployee);
        console.log(answer.addEmployee);

        if (answer.addEmployee != "Finish") {
            employeeArray.push(answer.addEmployee);
            promptEmployee();
        }
        else {
            console.log(employeeArray);
        }
    })
}

//When finished, generate the HTML

managerPrompt().then(function(answer) {
    //do something with answer
    console.log(answer);
    promptEmployee();
});