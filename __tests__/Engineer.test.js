const Engineer = require('../lib/engineer')
describe('Engineer', () => {
    let engineer
    beforeEach(() => {
        engineer = new Engineer('swetha', 4, 'swethareddyl@gmail.com', 'swethareddyl')
    })

    describe('github', () => {
        it('should return a github URL via getGithub()', () => {
            // const engineer = new Engineer('swetha', 4, 'swethareddyl@gmail.com', 'swethareddyl')


            expect(engineer.getGithub()).toEqual('http://www.github.com/swethareddyl')
        })

        it('can set GitHub account via constructor', () => {
            // const engineer = new Engineer('swetha', 4, 'swethareddyl@gmail.com', 'swethareddyl')


            expect(engineer.github).toEqual('swethareddyl')
        })
    })
    describe('getRole', () => {

        it('getRole() should return Engineer', () => {
            const engineer = new Engineer();

            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})