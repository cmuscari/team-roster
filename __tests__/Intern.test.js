const Intern = require('../lib/intern');

describe('Intern', () => {
    test ('gets the correct name', () => {
        const intern = new Intern('Eva', 123, 'eva@gmail.com', 'Github University');

        expect(intern.getName()).toBe('Eva');
    })
    test ('gets the correct id', () => {
        const intern = new Intern('Eva', 123, 'eva@gmail.com', 'Github University');

        expect(intern.getId()).toBe(123);
    })
    test ('gets the correct email', () => {
        const intern = new Intern('Eva', 123, 'eva@gmail.com', 'Github University');

        expect(intern.getEmail()).toBe('eva@gmail.com');
    })
    test ('gets the correct role', () => {
        const intern = new Intern('Eva', 123, 'eva@gmail.com', 'Github University');

        expect(intern.getRole()).toBe('Intern');
    })
    test ('gets the correct school', () => {
        const intern = new Intern('Eva', 123, 'eva@gmail.com', 'Github University');

        expect(intern.getSchool()).toBe('Github University');
    })
});