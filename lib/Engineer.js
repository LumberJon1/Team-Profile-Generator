const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        super()

        this.github = "username";
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;