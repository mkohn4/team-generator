const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,id,email, school,) {
        //call parent constructor
        super(name,id,email);
        //set github
        this.school = school;
    }
    //set role = manager
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;