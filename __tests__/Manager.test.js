const Manager = require ('../lib/Manager');

//name, email, id, role and school  name validation for manager
const managerTest = new Intern ('Prani', 'prani@gmail.com', 4 , 'Manager', 'office')

describe('Manager', () => {
    it('has a name', () =>{
        expect(managerTest.name).toEqual(expect.any(String))
        expect(managerTest.name.length).toBeGreaterThan(2)

    })
    it('has an email id', () =>{
        expect(managerTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an id that is a num', () => {
        expect(managerTest.id).toEqual(expect.any(Number))
    })

    it('has a role of engineer', () => {
        expect(managerTest.role).toBe('Manager')
    })

    it('has a school name', () => {
        keys = Object.keys(managerTest)
        optionKey = keys[4]
        expect(optionKey).toBe('office')
        expect(engineerTest.office).toEqual(expect.any(Number))
    })
})