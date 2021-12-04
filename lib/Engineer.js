const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name,id,email, github) {
        //call parent constructor
        super(name,id,email);
        //set github
        this.github = github;
    }
    //set role = engineer
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;