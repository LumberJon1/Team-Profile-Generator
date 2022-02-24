const Intern = require("../lib/Intern.js");

//test the inheritance of the superclass
test("inherits shared properties from superclass", () => {
    const intern = new Intern();

    expect(intern).toHaveProperty("id");
    expect(intern.id).toBeGreaterThanOrEqual(0);
});

//test the unique property "School"
test("contains a unique property \"school\"", () => {
    const intern = new Intern();

    expect(intern).toHaveProperty("school");
    expect(intern.school).toEqual(expect.any(String));
});

//test the getSchool method
test("getSchool method works as intended when school property updates", () => {
    const intern = new Intern();
    intern.school = "MIT";

    expect(intern.getSchool()).toEqual("MIT");
});

//test the overwritten role property
test("description", () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual("Intern");
});