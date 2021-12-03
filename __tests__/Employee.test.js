const Employee = require('../lib/Employee');

test('Set values for employee', () => {
    const testObject = new Employee('name', 'id', 'email')

    expect(testObject.name).toBe('name');
    expect(testObject.id).toBe('id');
    expect(testObject.email).toBe('email');
});

test('test getName()', () => {
    const testObject = new Employee('Sally');
    expect(testObject.getName()).toEqual('Sally');
});
test('test getId()', () => {
    const testObject = new Employee('Sally', 1);
    expect(testObject.getId()).toEqual(1);
});
test('test getEmail()', () => {
    const testObject = new Employee('Sally',1,'sally@gmail.com');
    expect(testObject.getEmail()).toEqual('sally@gmail.com');
});
test('test getRole()', () => {
    const testObject = new Employee();
    expect(testObject.getRole()).toEqual('Employee');
});