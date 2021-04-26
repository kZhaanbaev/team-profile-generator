const inquirer = require('inquirer');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const employeeData = require('./employeeData');
const questions = require('./questions')


class ManageTeam {
    async startManaging() {   
        try {
            let continuePrompt = 'add Manager';

            while (continuePrompt !== 'finish building the team') {
                if (continuePrompt === 'add Manager') {
                    let answers = await inquirer.prompt(questions.managerQuestions);
                    employeeData.manager.push(new Manager(answers.managerName, answers.managerEmail, answers.managerID, answers.officeNumber));
                    continuePrompt = answers.addMore;
                } else if (continuePrompt === 'add Engineer') {
                    let engineer = await inquirer.prompt(questions.engineerQuestions);
                    employeeData.engineers.push(new Engineer(engineer.engineerName, engineer.engineerEmail, engineer.engineerID, engineer.engineerGithub));
                    continuePrompt = engineer.addEngineer;
                } else {
                    let intern = await inquirer.prompt(questions.internQuestions);
                    employeeData.interns.push(new Intern(intern.internName, intern.internEmail, intern.internID, intern.internSchool));
                    continuePrompt = intern.addIntern;
                }
            }
        } catch (error) {
            console.log(error);
        }
        console.log("Successfully added all entries...");
    }

}

module.exports = ManageTeam;

