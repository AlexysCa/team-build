const inquirer = require('inquirer');
const fs = require('fs');
const console = require('console');

// inquirer prompt for initial command-line user input with info for HTML 
const teamMembers = () => {
 return inquirer.prompt ([
{
    type: 'input',
    message: 'Enter your team manager`s name.',
    name: 'teamManager',
},
{

    type: 'input',
    message: 'Enter your employee ID.',
    name: 'employeeID',
},
{
    type: 'input',
    message: 'Enter your email address.',
    name: 'email',
},
{
    type: 'input',
    message: 'Enter your office number.',
    name: 'office',
},
{
    type: 'list',
    message: 'Select which you would like to add and/or complete next.',
    name: 'addTeam',
    choices: ['Engineer', 'Intern', 'Finish Building My Team']
    }
])
    .then(({ addTeam }) => {
    if (addTeam === 'Engineer') {
        inquirer
        .prompt ([
        {
            type: 'input',
            message: 'Enter Engineer`s name.',
            name: 'engineer',
        },
        {
            type: 'input',
            message: 'Enter employee ID.',
            name: 'engineerID',
        },
        {
            type: 'input',
            message: 'Enter email address.',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'Enter GitHub username.',
            name: 'engineerGithub',
        },
        ]);
        return 
    } else if (addTeam === 'Intern') {
        inquirer
        .prompt ([
        {
            type: 'input',
            message: 'Enter Intern`s name.',
            name: 'intern',
        },
        {   type: 'input',
            message: 'Enter employee ID.',
            name: 'interID',

        },
        {
            type: 'input',
            message: 'Enter email address.',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'Enter Intern`s school name.',
            name: 'school',
        }    
        ]);
        return
    } else if (addTeam === 'Finish Building My Team') {
        console.log('HTML document was created! Check dist/ folder.');
    }
})

    
};

// funcation call 
teamMembers();