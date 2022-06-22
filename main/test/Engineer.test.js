const Engineer = require(`../lib/Engineer`);

describe('Engineer', () => {
    it(`Should return the Engineers github username`, () => {
        const obj1 = new Engineer('Tyler', 77, `none`, `Keuler`)

        expect(obj1.github).toEqual('Keuler');
    });
});