const Employee = require('../lib/Employee');



test('creates an employee object', () => {
    const employee = new Employee('Eva', 123, 'eva@gmail.com');

    expect(employee.name).toBe('Eva');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('eva@gmail.com');
});





























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