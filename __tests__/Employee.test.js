const Employee = require('../lib/Employee');

describe('Employee', () => {
    test ('gets the correct name', () => {
        const employee = new Employee('Eva', 123, 'eva@gmail.com');

        expect(employee.getName()).toBe('Eva');
    })
    test ('gets the correct id', () => {
        const employee = new Employee('Eva', 123, 'eva@gmail.com');

        expect(employee.getId()).toBe(123);
    })
    test ('gets the correct email', () => {
        const employee = new Employee('Eva', 123, 'eva@gmail.com');

        expect(employee.getEmail()).toBe('eva@gmail.com');
    })
    test ('gets the correct role', () => {
        const employee = new Employee('Eva', 123, 'eva@gmail.com');

        expect(employee.getRole()).toBe('Employee');
    })
});








// test('creates an employee object', () => {
//     const employee = new Employee('Eva', 123, 'eva@gmail.com');

//     expect(employee.name).toBe('Eva');
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toBe('eva@gmail.com');
// });

// test('assigns an employee name', () => {
//     const employee = new Employee('Eva', 123, 'eva@gmail.com');

    
// })





























// test('creates a health potion object', () => {
//     const potion = new Potion('health');
  
//     expect(potion.name).toBe('health');
//     expect(potion.value).toEqual(expect.any(Number));
//   });

//   test('creates a player object', () => {
//     const player = new Player('Dave');
  
//     expect(player.name).toBe('Dave');
//     expect(player.health).toEqual(expect.any(Number));
//     expect(player.strength).toEqual(expect.any(Number));
//     expect(player.agility).toEqual(expect.any(Number));
//     expect(player.inventory).toEqual(
//         expect.arrayContaining([expect.any(Object)])
//     );
//   });