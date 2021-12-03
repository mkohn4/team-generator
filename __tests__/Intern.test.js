const Intern = require('../lib/Intern');

test('test this.school', () => {
    const testObject = new Intern('sally',1,'sally@gmail.com','highschool');
    expect(testObject.school).toBe('highschool');
})

test('tests for school', () => {
    const testObject = new Intern('sally',1,'sally@gmail.com','highschool');
    expect(testObject.getSchool()).toBe('highschool');
});

test('test getRole()', () => {
    const testObject = new Intern();
    expect(testObject.getRole()).toEqual('Intern');
});