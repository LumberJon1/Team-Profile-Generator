class Employee {

    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "default@email.com";
        this.role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;