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

/*
Start with common attributes to make a first class
Extend that class with anything additional for your program thats needed for variations of original class
Test each method and class as you go through it
*/