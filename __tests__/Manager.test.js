const Manager = require('../lib/Manager');

describe('Manager', () => {
    test ('gets the correct name', () => {
        const manager = new Manager('Eva', 123, 'eva@gmail.com', 6);

        expect(manager.getName()).toBe('Eva');
    })
    test ('gets the correct id', () => {
        const manager = new Manager('Eva', 123, 'eva@gmail.com', 6);

        expect(manager.getId()).toBe(123);
    })
    test ('gets the correct email', () => {
        const manager = new Manager('Eva', 123, 'eva@gmail.com', 6);

        expect(manager.getEmail()).toBe('eva@gmail.com');
    })
    test ('gets the correct role', () => {
        const manager = new Manager('Eva', 123, 'eva@gmail.com', 6);

        expect(manager.getRole()).toBe('Manager');
    })
    test ('gets the correct office number', () => {
        const manager = new Manager('Eva', 123, 'eva@gmail.com', 6);

        expect(manager.getOfficeNum()).toBe(6);
    })
});