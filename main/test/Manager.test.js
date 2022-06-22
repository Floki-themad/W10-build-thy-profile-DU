const Manager = require(`../lib/Manager`);

describe('Manager', () => {
    it(`Should return the managers office number`, () => {
        const obj1 = new Manager('Tyler', 77, `none`, 66)

        expect(obj1.office).toEqual(66)
    });
});