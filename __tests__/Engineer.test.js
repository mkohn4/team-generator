const Engineer = require('../lib/Engineer');

test('test this.github', () => {
    const testObject = new Engineer('sally',1,'sally@gmail.com','sallygit');
    expect(testObject.github).toBe('sallygit');
})

test('tests for github', () => {
    const testObject = new Engineer('sally',1,'sally@gmail.com','sallygit');
    expect(testObject.getGithub()).toBe('sallygit');
});

test('test getRole()', () => {
    const testObject = new Engineer();
    expect(testObject.getRole()).toEqual('Engineer');
});