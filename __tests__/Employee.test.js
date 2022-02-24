const Employee = require("../lib/Employee.js");

//Attribute tests

//Test for the name
test("Checks that the name is properly loading", () => {
    const employee = new Employee();

    
    expect(employee.name).toEqual(expect.any(String));
});

//Test for the id
test("Checks that the employee ID is properly assigned", () => {
    const employee = new Employee();
    
    expect(employee.id).toBeGreaterThanOrEqual(0);
});

//Test for the email
test("Checks that the email is working", () => {
    const employee = new Employee();
    
    expect(employee.email).toEqual(expect.stringContaining("@"));
});

//Method tests

//Test the getId method
test("Checks that the getId method is working", () => {
    const employee = new Employee();

    employee.id = 2211;
    
    expect(employee.getId()).toEqual(employee.id);
});

//Test the getEmail method
test("Checks that the getEmail method is working", () => {
    const employee = new Employee();

    employee.email = "NiftyPerson@email.com";
    
    expect(employee.getEmail()).toEqual(employee.email);
});

//Test the getRole method
test("Checks that the getRole method is working", () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual("Employee");

    employee.role = "Janitor";
    
    expect(employee.getRole()).toEqual("Janitor");
});