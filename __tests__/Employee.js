const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

describe("Employee class", () => {
    const manager = new Manager("John", "john@test.com", 4, 202-202-2222);
    const engineer = new Engineer("John", "john@test.com", 4, "john.gihub.com");
    const intern = new Intern("John", "john@test.com", 4, 'GW Bootcamp');
    
    it("Email should be john@test.com", () => {
        expect(manager.getEmail()).toEqual("john@test.com");
        expect(engineer.getEmail()).toEqual("john@test.com");
        expect(intern.getEmail()).toEqual("john@test.com");
    });

    it("Employee id should be number value 4", () => {
        expect(manager.getId()).toEqual(4);
        expect(engineer.getId()).toEqual(4);
        expect(intern.getId()).toEqual(4);
    });

    it("Should return instance of Employee", () => {
        const employee = new Employee("Kennedy", 'ken@test.email', 33);
        expect(employee.getRole()).toBe(Employee);
    })
})