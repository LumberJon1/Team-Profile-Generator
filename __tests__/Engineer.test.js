const Engineer = require("../lib/Engineer");

//Test the inherited properties
test("Inherits the properties from the superclass Employee", () => {

    const engineer = new Engineer();

    expect(engineer).toHaveProperty("id");
});

//Test the github property
test("Contains a unique property \"github\"", () => {

    const engineer = new Engineer();

    expect(engineer.github).toBeTruthy();
    expect(engineer.github).toEqual(expect.any(String));
});

//Test the getGithub method
test("getGithub method works properly", () => {

    const engineer = new Engineer();
    engineer.github = "UN22";

    expect(engineer.getGithub()).toEqual("UN22");
});

//Test the overwritten role
test("role has been overwritten from superclass", () => {

    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");
});
