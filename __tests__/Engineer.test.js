const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    test ('gets the correct name', () => {
        const engineer = new Engineer('Eva', 123, 'eva@gmail.com', 'eva123');

        expect(engineer.getName()).toBe('Eva');
    })
    test ('gets the correct id', () => {
        const engineer = new Engineer('Eva', 123, 'eva@gmail.com', 'eva123');

        expect(engineer.getId()).toBe(123);
    })
    test ('gets the correct email', () => {
        const engineer = new Engineer('Eva', 123, 'eva@gmail.com', 'eva123');

        expect(engineer.getEmail()).toBe('eva@gmail.com');
    })
    test ('gets the correct role', () => {
        const engineer = new Engineer('Eva', 123, 'eva@gmail.com', 'eva123');

        expect(engineer.getRole()).toBe('Engineer');
    })
    test ('gets the correct github', () => {
        const engineer = new Engineer('Eva', 123, 'eva@gmail.com', 'eva123');

        expect(engineer.getGithub()).toBe('eva123');
    })
});