
module.exports = {
    managerQuestions: [
        {
            name: 'managerName',
            message: 'What is team\'s manager name?'
        },
        {
            name: 'managerID',
            message: 'What is manager\'s employee id?'
        },
        {
            name: 'managerEmail',
            message: 'What is manager\'s email address?'
        },
        {
            name: 'officeNumber',
            message: 'What is manager\'s office number?'
        },
        {
            type: 'list',
            name: 'addMore',
            message: 'Please select to add any engineer/intern or to finish building the team:',
            choices: ['add Engineer', 'add Intern', 'finish building the team']
        }
    ],

    engineerQuestions: [
        {
            name: 'engineerName',
            message: 'What is engineer\s name?'
        },
        {
            name: 'engineerID',
            message: 'What is engineer\'s employee id?'
        },
        {
            name: 'engineerEmail',
            message: 'What is engineer\'s email address?'
        },
        {
            name: 'engineerGithub',
            message: 'What is engineer\'s github username?'
        },
        {
            type: 'list',
            name: 'addEngineer',
            message: 'Please select to add any engineer/intern or to finish building the team:',
            choices: ['add Engineer', 'add Intern', 'finish building the team']
        }
    ],
    internQuestions: [
        {
            name: 'internName',
            message: 'What is intern\s name?'
        },
        {
            name: 'internID',
            message: 'What is intern\'s employee id?'
        },
        {
            name: 'internEmail',
            message: 'What is intern\'s email address?'
        },
        {
            name: 'internSchool',
            message: 'What school intern went to?'
        },
        {
            type: 'list',
            name: 'addIntern',
            message: 'Please select to add any engineer/intern or to finish building the team:',
            choices: ['add Engineer', 'add Intern', 'finish building the team']
        }
    ]
}