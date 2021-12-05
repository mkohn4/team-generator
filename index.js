const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const {writeFile, markup} = require('./lib/templates.js');
const teamArray = [];


const managerFunc = function () {

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Manager name? (Required)',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Enter the Manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID? (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Enter the employee ID!');
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'email',
            message: "What is the employee's email? (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Enter the employee email');
                    return false;
                }
            }
        }
        ,{
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager Office Number? (Required)",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Enter the Office Number');
                    return false;
                }
            }
        }
    ])
    .then(managerAnswers => {
        console.log(managerAnswers);
        //deconstruct object to set variables in here equal to dot notation (const name = managerAnswer.name, const email = managerAnswer.email, etc.)
        const {name,id,email,officeNumber} = managerAnswers;
        //set manager var as new instance of Manager object with answers provided
        const manager = new Manager(name,id,email,officeNumber);
        //push the manager array
        teamArray.push(manager);
        //call next employee function
        nextEmployee();

    })
};

const engineerFunc = function () {

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineer name? (Required)',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Enter the Engineer name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID? (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Enter the employee ID!');
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'email',
            message: "What is the employee's email? (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Enter the employee email');
                    return false;
                }
            }
        }
        ,{
            type: 'input',
            name: 'github',
            message: "What is the Engineer Github? (Required)",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Enter the Engineer Github');
                    return false;
                }
            }
        }
    ])
    .then(engineerAnswers => {
        console.log(engineerAnswers);
        //deconstruct object
        const {name,id,email,github} = engineerAnswers;
        //set manager var as new instance of Manager object with answers provided
        const engineer = new Engineer(name,id,email,github);
        //push to array
        teamArray.push(engineer);
        //call next employee function
        nextEmployee();
    })
};

const internFunc = function () {

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Intern name? (Required)',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Enter the Intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID? (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Enter the Intern ID!');
                    return false;
                }
            }
        },{
            type: 'input',
            name: 'email',
            message: "What is the Intern's email? (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Enter the Intern email');
                    return false;
                }
            }
        }
        ,{
            type: 'input',
            name: 'school',
            message: "What is the Interns school? (Required)",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Enter the school');
                    return false;
                }
            }
        }
    ])
    .then(internAnswers => {
        console.log(internAnswers);
        //deconstruct object
        const {name,id,email,school} = internAnswers;
        //set manager var as new instance of Manager object with answers provided
        const intern = new Intern(name,id,email,school);
        //push values to array
        teamArray.push(intern);
        //call next employee function
        nextEmployee();
    })
};

const nextEmployee = function () {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What would you like to do? (required)',
            choices: ['Engineer', 'Intern', 'Build Your Team'],
            validate: role => {
                if (role) {
                    return true;
                } else {
                    console.log('Choose a value!');
                    return false;
                }
            }
        }]).then(employeeChoice => {
            console.log(employeeChoice);
            if(employeeChoice.role === 'Engineer') {
                console.log('engineer');
                engineerFunc();
            } else if (employeeChoice.role === 'Intern') {
                console.log('intern');
                internFunc();
            } else {
                //console.log('show all team members');
                //console.log(teamArray);
                buildTeam();
            }
        })
}

const buildTeam = () => {
    //use .filter to filter the array to find manager,engineer,intern from getRole() to create 3 separate arrays for each type of employee
    //console.log(managerArray);
    const managerArray = teamArray.filter(currentElement => currentElement.getRole() === 'Manager');
    const managersHTML = managerArray.map(manager => {
        //create template literals with bootsrap card html
        //should be an instance of each key/value in the object (ie: ${engineer.name})
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <p class="card-text">${manager.getRole()}</p>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${manager.getId()}</li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
            <a href="mailto:${manager.getEmail()}" class="btn btn-primary">Email Me! @ ${manager.getEmail()}</a>
      </div>
      `
    })
    //managersHTML.join("");
    //console.log(managersHTML);

    const engineerArray = teamArray.filter(currentElement => currentElement.getRole() === 'Engineer');
    //if engineers exist
    //if (engineerArray.length >0) {
        //use .map to take the existing array of manager, intern, and engineer because you need to have different cards for different values
         const engineersHTML = engineerArray.map(engineer => {
            //create template literals with bootsrap card html
            //should be an instance of each key/value in the object (ie: ${engineer.name})
            return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${engineer.getName()}</h5>
            <p class="card-text">${engineer.getRole()}</p>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Github: <a href="https://www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
                <a href="mailto:${engineer.getEmail()}" class="btn btn-primary">Email Me! @ ${engineer.getEmail()}</a>
        </div>
        `
        })
        //join html together
        engineersHTML.join("");
        //console.log(engineersHTML);
    //}

        const internArray = teamArray.filter(currentElement => currentElement.getRole() === 'Intern');
        //if interns exist
        //if(internArray.length>0) {
            const internsHTML = internArray.map(intern => {
                //create template literals with bootsrap card html
                //should be an instance of each key/value in the object (ie: ${engineer.name})
                return `
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${intern.getName()}</h5>
                  <p class="card-text">${intern.getRole()}</p>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${intern.getId()}</li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                    <a href="mailto:${intern.getEmail()}" class="btn btn-primary">Email Me! @ ${intern.getEmail()}</a>
              </div>
              `
            });
            internsHTML.join("");
            //console.log(internsHTML);
        //}
        //concatenate all html array values together
        const teamHTML = managersHTML.concat(engineersHTML, internsHTML);
        //pass team html back
        //then, join("") all engineer cards to make all template literal cards for the engineers one template of cards
        //then join("") all engineers, manager, and interns
        //then insert all into the HTML template
        writeFile(markup(teamHTML));
    
}

managerFunc();

