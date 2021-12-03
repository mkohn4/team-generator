const Manager = require('../lib/Manager');

test('test this.officeNumber', () => {
    const testObject = new Manager('sally',1,'sally@gmail.com',2);
    expect(testObject.officeNumber).toBe(2);
})

test('tests for officeNumber', () => {
    const testObject = new Manager('sally',1,'sally@gmail.com',2);
    expect(testObject.getOfficeNumber()).toBe(2);
});

test('test getRole()', () => {
    const testObject = new Manager();
    expect(testObject.getRole()).toEqual('Manager');
});