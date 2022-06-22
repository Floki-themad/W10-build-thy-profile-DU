const Employee = require("../lib/Employee");

describe(`Employee`, () => {
    it(`Should return the employee name`, () =>{
        const obj1 = new Employee('Tyler')
        expect(obj1.name).toEqual('Tyler');
    });

    it(`Should return the employee ID`, () =>{
        const obj2 = new Employee(`Tyler`, 77)

        expect(obj2.id).toEqual(77);
    });

    it(`Should return the employee's email adress`, () =>{
        const obj3 = new Employee(`Tyler`, 77, `none` )

        expect(obj3.email).toEqual(`none`);
    })
});