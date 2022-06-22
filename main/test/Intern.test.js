const Intern = require(`../lib/Intern`);

describe('Intern', () => {
    it(`Should return the school that the intern is attending`, () => {
        const obj1 = new Intern('tyler', 66, `none`, `HardKnox`)
        
        expect(obj1.school).toEqual('HardKnox');
    });
});