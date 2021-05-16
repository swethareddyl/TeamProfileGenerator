const Employee = require("../lib/employee")

describe('Employee', () => {
    let employee
    beforeEach(() => {
        employee = new Employee('Joshnav', 6, 'joshnav@gmail.com')
    })
    it('can instantiate Employee instance', () => {
        const employee = new Employee()
        expect(employee).toBeTruthy();
    })
    it('can set name, id, and e-mail via constructor arguments', () => {

        expect(employee.name).toEqual('Joshnav');
        expect(employee.id).toEqual(6);
        expect(employee.email).toEqual('joshnav@gmail.com')
    })
    it('can get name via getName() function', () => {

        expect(employee.getName()).toEqual('Joshnav');
    })
    it('can get id via getId() function', () => {

        expect(employee.getId()).toEqual(6);
    })
    it('can get email via getEmail() function', () => {

        expect(employee.getEmail()).toEqual('joshnav@gmail.com')
    })
    it('getRole() should return Employee', () => {

        expect(employee.getRole()).toEqual('Employee')
    })
})