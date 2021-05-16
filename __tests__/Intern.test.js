const Intern = require("../lib/intern")

describe('Intern', () => {
    let intern
    beforeEach(() => {
        intern = new Intern('Karthik', 12, 'karthik@gmail.com', 'Stanford')
    })

describe("getRole", () => {
    it('should return the string "Intern"', () => {
        // const intern = new Intern('Karthik', 12, 'karthik@gmail.com', 'Stanford')
        expect(intern.getRole()).toEqual('Intern')
    })
})
describe("getSchool", () => {
    it('should return Stanford when getSchool() is run', () => {
        // const intern = new Intern('Karthik', 12, 'karthik@gmail.com', 'Stanford');
        expect(intern.getSchool()).toEqual('Stanford')
    })
   
    it('should set school via constructor', () => {
        // const intern = new Intern('Karthik', 12, 'karthik@gmail.com', 'Stanford');
        expect(intern.school).toEqual('Stanford')
    })
})
})