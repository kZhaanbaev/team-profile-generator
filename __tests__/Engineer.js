const Engineer = require('../lib/Engineer');

describe("Engrineer class", () => {
    const engineer = new Engineer("John", "john@test.com", 4, 'john.github.com');

    it("Should return instance of Engineer", () => {
        expect(engineer.getRole()).toBe(Engineer);
    });

    it("Github account name should be john.github.com", () =>{
        expect(engineer.getGithub()).toEqual('john.github.com');
    })
})