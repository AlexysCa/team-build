const inquirer = require('inquirer');
const fs = require('fs');
const console = require('console');

// inquirer prompt for initial command-line user input with info for HTML 
const main = () => {
  inquirer
  .prompt ([
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
])  
.then((data) => {
    let manager = new Manager(data.teamManager, data.employeeID, data.email, data.office);
    push(manager);
    addTeammate();  
});
};

// prompt asks if team members are going to be added
const addTeammate = () => {
    inquirer
    .prompt ([
{
    type: 'list',
    message: 'Select which you would like to add and/or complete next.',
    name: 'addTeam',
    choices: ['Engineer', 'Intern', 'Finish Building My Team']
},
])
    .then((data) => {
        if(data.addTeam === 'Engineer') {
            addEngineer();
        } else if (data.addTeam === 'Intern') {
            addIntern();
        } else {
            console.log('HTML document was created! Check dist/ folder.');
        }
    })
};

// prompt creates engineer in HTML
const addEngineer = () => {
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
])
.then((data) => {
    let engineer = new Engineer(data.engineer, data.engineerID, data.engineerEmail, data.engineerGithub);
    push(engineer);
    addTeammate();
})
};

// prompt creates intern in HTML
const addIntern = () => {
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
])
.then((data) => {
    let intern = new Intern(data.intern, data.internID, data.internEmail, data.school);
    push(intern);
    addTeammate();
})
};


// main funcation call 
main();