const Manager = require('../lib/Manager');

describe("Manager class", () => {
    const manager = new Manager("John", "john@test.com", 4, 202-202-2222);

    it("Should return instance of Manager", () => {
        expect(manager.getRole()).toBe(Manager);
    });

    it("Office number should 202-202-222", () => {
        expect(manager.getOfficeNumber()).toEqual(202-202-2222);
    })
})