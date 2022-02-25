//requires
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");



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

//Prompt details of the employee
const promptDetails = (employee) => {
    console.log("Prompting for details about "+employee);
    if (employee === "Engineer") {
        inquirer.prompt([
            {
                type: "text",
                name: "name",
                message: "Enter the engineer's name"
            },
            {
                type: "text",
                name: "id",
                message: "Enter the engineer's employee ID number."
            },
            {
                type: "text",
                name: "email",
                message: "Enter the engineer's work email address."
            },
            {
                type: "text",
                name: "github",
                message: "Enter the engineer's github username."
            }
        ]).then(promptEmployee);
    }
    else if (employee === "Intern") {
        inquirer.prompt([
            {
                type: "text",
                name: "name",
                message: "Enter the intern's name"
            },
            {
                type: "text",
                name: "id",
                message: "Enter the intern's employee ID number."
            },
            {
                type: "text",
                name: "email",
                message: "Enter the intern's work email address."
            },
            {
                type: "text",
                name: "school",
                message: "Enter the intern's school."
            }
        ]).then(promptEmployee);
    }
}

//Prompt name, employee ID, email, and office number
const promptEmployee = () => {
    inquirer.prompt(
        {
            type: "list",
            name: "employeeType",
            message: "Choose to add an engineer or intern to the team, or finish building.",
            choices: ["Engineer", "Intern", "Finish"]
        }
    ).then(function(answer) {
        console.log("Answer: "+answer.employeeType);
        console.log(answer.employeeType);

        if (answer.employeeType === "Engineer") {
            promptDetails(answer.employeeType);
            employeeArray.push(answer.employeeType);
        }
        else if (answer.employeeType === "Intern"){
            promptDetails(answer.employeeType)
            employeeArray.push(answer.employeeType);
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