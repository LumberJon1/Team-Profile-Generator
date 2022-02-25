const Manager = require("./Manager.js");
const Intern = require("./Intern.js");
const Engineer = require("./Engineer.js");
const inquirer = require("inquirer");

class Prompts {
    constructor() {
        this.employeeArray = [];
    }

    managerPrompt() {
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
        ]).then(this.promptEmployee())
    }

    promptEmployee(){
        inquirer.prompt(
            {
                type: "list",
                name: "addEmployee",
                message: "Choose to add an engineer or intern to the team, or finish building.",
                choices: ["Engineer", "Intern", "Finish"]
            }
        ).then((answer) => {
            console.log("Answer: "+answer.addEmployee);
            console.log(answer.addEmployee);

            if (answer.addEmployee != "Finish") {
                this.addEmployee(answer.addEmployee);
                this.promptEmployee();
            }
            else {
                this.getEmployees();
            }
        })
    }
    
    addEmployee(employee){
        
        if (employee === "Engineer") {
            //Add an engineer
            console.log("Adding an engineer to the team.");
            this.employeeArray.push(employee);
        }
        else if (employee === "Intern") {
            //Add intern
            console.log("Adding an intern to the team.");
            this.employeeArray.push(employee);
        }
        else {
            return;
        }
    }

    getEmployees() {
        console.log(this.employeeArray);
    }

}

module.exports = Prompts;