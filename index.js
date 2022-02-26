//requires
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const {generatePage, generateEmployeeCards} = require("./src/page-template.js");
const fs = require("fs");



//Array that holds employees
const employeeArray = [];

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
    ]).then(function(answer) {
        let manager = new Manager();
        manager.name = answer.name;
        manager.id = answer.id;
        manager.email = answer.email;
        manager.officeNumber = answer.officeNumber;

        employeeArray.push(
            {
            role: manager.getRole(),
            name: manager.name,
            id: manager.id,
            email: manager.email,
            school: manager.officeNumber
            }
        )}
    )
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
        ]).then(function(answer) {

            let engineer = new Engineer();

            engineer.name = answer.name;
            engineer.id = answer.id;
            engineer.email = answer.email;
            engineer.github = answer.github;

            employeeArray.push({
                role: engineer.getRole(),
                name: engineer.name,
                id: engineer.id, 
                email: engineer.email,
                github: engineer.github
            });

            promptEmployee();
        });
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
        ]).then(function(answer) {

            let intern = new Intern();

            intern.name = answer.name;
            intern.id = answer.id;
            intern.email = answer.email;
            intern.school = answer.school;

            employeeArray.push({
                role: intern.getRole(),
                name: intern.name,
                id: intern.id,
                email: intern.email,
                school: intern.school
            });

            promptEmployee();
        });
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
        }
        else if (answer.employeeType === "Intern"){
            promptDetails(answer.employeeType)
        }
        else {
            console.log(employeeArray);
            const pageData = generatePage(employeeArray)
            console.log(pageData);
            writeFile(pageData);
        }
    })
}

//When finished, generate the HTML

managerPrompt().then(function(answer) {
    //do something with answer
    console.log(answer);
    promptEmployee()
})

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: "File created."
            });
        });
    });
};
