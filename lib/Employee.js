
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;

/*Employee.prototype.employeePrompts = function () {

    return inquirer.prompt ([
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
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Which type of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'Build My Team'],
            validate: employeeType => {
                if (employeeType) {
                    return true;
                } else {
                    console.log('Choose an option!');
                    return false;
                }
            }
        },
    ])
    .then(employeeAnswers => {
        console.log(employeeAnswers);
        /*console.log(readmeData);
        readmeData.projects = [];
        //push responses to the readmeData.projects array
        readmeData.projects.push(readmeAnswers);
        //return the current data
        if (employeeAnswers.employeeType === 'Build My Team') {
            return buildTeam(employeeAnswers);
        } else {

        }
    })
};*/