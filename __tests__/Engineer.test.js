const Engineer = require("../lib/Engineer");

//Test the inherited properties
test("Inherites the properties from the superclass Employee", () => {

    const engineer = new Engineer();

    expect(engineer.getId()).toEqual(0);
});

//Test the github property
test("Inherites the properties from the superclass Employee", () => {

    const engineer = new Engineer();

    expect(engineer.github).toBeTruthy();
    expect(engineer.github).toEqual(expect.any(String));
});

//Test the getGithub method
test("Inherites the properties from the superclass Employee", () => {

    const engineer = new Engineer();
    expect(engineer.getGithub()).toEqual("username");

    engineer.github = "UN22";

    expect(engineer.getGithub()).toEqual("UN22");
});

//Test the overwritten role
test("Inherites the properties from the superclass Employee", () => {

    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");
});
