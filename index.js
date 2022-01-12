const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createHtml = require('./src/Html');

// array for data to be pushed and help in

var workTeam = []

// inquirer prompt for initial command-line user input with info for HTML 
const main = () => {
  inquirer
  .prompt ([
{
    type: 'input',
    message: 'Enter your team manager`s name.',
    name: 'name',
},
{

    type: 'input',
    message: 'Enter your employee ID.',
    name: 'id',
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
    let manager = new Manager(data.name, data.id, data.email, data.office);
    workTeam.push(manager);
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
            render();
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
    name: 'name',
},
{
    type: 'input',
    message: 'Enter employee ID.',
    name: 'id',
},
{
    type: 'input',
    message: 'Enter email address.',
    name: 'email',
},
{
    type: 'input',
    message: 'Enter GitHub username.',
    name: 'github',
},
])
.then((data) => {
    let engineer = new Engineer(data.name, data.id, data.email, data.github);
    workTeam.push(engineer);
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
    name: 'name',
},
{   type: 'input',
    message: 'Enter employee ID.',
    name: 'id',

},
{
    type: 'input',
    message: 'Enter email address.',
    name: 'email',
},
{
    type: 'input',
    message: 'Enter Intern`s school name.',
    name: 'school',
}    
])
.then((data) => {
    let intern = new Intern(data.name, data.id, data.email, data.school);
    workTeam.push(intern);
    addTeammate();
})
};

const render = () => {
    let renderedHtml = createHtml(workTeam);
    fs.writeFileSync('./dist/index.html', renderedHtml, function(err) {

    })
}

// main funcation call 
main();