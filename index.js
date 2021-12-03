const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = [];

managerFunc = function () {

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Manager name? (Required)',
            validate: id => {
                if (id) {
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
        //deconstruct object
        const {name,id,email,officeNumber} = managerAnswers;
        //set manager var as new instance of Manager object with answers provided
        const manager = new Manager(name,id,email,officeNumber);
        //push the manager array
        teamArray.push(manager);
        //call next employee function
        nextEmployee();

    })
};

engineerFunc = function () {

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

internFunc = function () {

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
            if(employeeChoice === 'Engineer') {
                engineerFunc();
            } else if (employeeChoice === 'Intern') {
                internFunc();
            } else {
                console.log('buildTeam()');
            }
        })
}

const buildTeam = function () {
    //use .filter to filter the array to find manager,engineer,intern from getRole() to create 3 separate arrays for each type of employee
    //use .map to take the existing array of manager, intern, and engineer
        /*engineerArray.map(engineer => {
            //create template literals with bootsrap card html
            //should be an instance of each key/value in the object (ie: ${engineer.name})
            return 'template literal html with variable values above'
        })*/
        //then, join("") all engineer cards to make all template literal cards for the engineers one template of cards
        //then join("") all engineers, manager, and interns
        //then insert all into the HTML template
        
    
}

managerFunc();

