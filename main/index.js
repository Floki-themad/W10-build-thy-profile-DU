const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const makeHTMl = require('./src/template');
const managerStyle = require('./src/InternStyle');
const engineerStyle = require('./src/Engineerstyle');
const internStyle = require('./src/InternStyle');
const { profile } = require('console');
const Employee = require('./lib/Employee');
let teamName = "";
const teamArray = [];

const start = () => {
    inquirer.prompt([{
        type: `input`,
        name: `teamName`,
        message: `Whats your team name?`
    }])
        .then((data => {
            teamName = data.teamName;
            manager();
        }))

    function manager() {
        inquirer.prompt([{
            type: `input`,
            name: `name`,
            message: `What is the name of the teams manager?`
        }, {
            type: `input`,
            name: `id`,
            message: `What is the mangers ID number?`
        }, {
            type: `input`,
            name: `email`,
            message: `What is the managers email adress?`
        }, {
            type: `input`,
            name: `office`,
            message: `What is the managers office number?`
        },
        ])
            .then((data) => {
                let newManager;
                newManager = new Manager(data.name, data.id, data.email, data.office);
                teamArray.push(newManager);
                employee();
            })

    }
    function employee() {
        inquirer.prompt([{
            type: `list`,
            name: `continue`,
            message: ` would you like to add a member to the team?`,
            choices: [`Engineer`, `Intern`, `No new members`]
        }])
            .then((data) => {
                switch (data.continue) {
                    case `Engineer`:
                        engineer();
                        break;
                    case `Intern`:
                        intern();
                        break;
                    default:
                        writePage();
                        break;
                }
            })
    }
    function engineer() {
        inquirer.prompt([{
            type: `input`,
            name: `name`,
            message: `what is the name of the Engineer?`
        }, {
            type: `input`,
            name: `id`,
            message: `what is the engineers ID?`,
        }, {
            type: `input`,
            name: `email`,
            message: `what is the engineers email adress?`
        }, {
            type: `input`,
            name: `github`,
            message: `what is the engineers Github username?`
        },
        ])
            .then((data) => {
                let newEngineer;
                newEngineer = new Engineer(data.name, data.id, data.email, data.github);
                teamArray.push(newEngineer);
                employee();
            })
    }

    function intern() {
        inquirer.prompt([{
            type: `input`,
            name: `name`,
            message: `what is the name of the intern?`
        }, {
            type: `input`,
            name: `id`,
            message: `what is the interns ID?`
        }, {
            type: `input`,
            name: `email`,
            message: `what is the interns email adress?`
        }, {
            type: `input`,
            name: `school`,
            message: `what school does the intern attend`,
        },
        ])
            .then((data) => {
                let newIntern;
                newIntern = new Intern(data.name, data.id, data.email, data.school);
                teamArray.push(newIntern);
                employee();
            })
    }
}