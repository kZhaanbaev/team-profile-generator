const Intern = require('../lib/Intern');

describe("Intern class", () => {
    const intern = new Intern("John", "john@test.com", 4, "GW Bootcamp");

    it("Should return instance of Intern", () => {
        expect(intern.getRole()).toBe(Intern);
    });

    it("Office number should 202-202-222", () => {
        expect(intern.getSchool()).toEqual("GW Bootcamp");
    })
})