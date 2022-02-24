const Manager = require("../lib/Manager.js");

//test the inheritance of the superclass
test("inherits shared properties from superclass", () => {
    const manager = new Manager();

    expect(manager).toHaveProperty("id");
    expect(manager.id).toBeGreaterThanOrEqual(0);
});

//test the unique property "Office Number"
test("contains a unique property \"office number\"", () => {
    const manager = new Manager();

    expect(manager).toHaveProperty("officeNumber");
    expect(manager.officeNumber).toBeGreaterThanOrEqual(0);
});

//test the overwritten role property
test("has an updated role that reflects the extension of superclass", () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual("Manager");
});