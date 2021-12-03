const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email, officeNumber) {
        //call parent constructor
        super(name,id,email);
        //set officeNumber
        this.officeNumber = officeNumber;
    }
    //set role = manager
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;