const Manager = require("../lib/Manager")

describe('Manager', () => {
    let manager
    beforeEach(() => {
        manager = new Manager('Anil', 1, 'anilre@gmail.com', 5)
    })
    describe('officeNumber', () => {

        it('should set office number via constructor', () => {

            expect(manager.officeNumber).toEqual(5);
        })
        it('getOfficeNumber should return an office number', () => {
            
            expect(manager.getOfficeNumber()).toEqual(34);
        })
    })
    describe('getRole', () => {
        it('should return "Manager"', () => {
            
            expect(manager.getRole()).toEqual('Manager')
        })
    })
})