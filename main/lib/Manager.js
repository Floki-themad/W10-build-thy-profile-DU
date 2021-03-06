const Employee = require(`../lib/Employee`);

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email)
        this.office = office; 
        this.title = `Manager`;
    }
}

module.exports = Manager;