//link to HTML page
const path = require('path');

//team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');

//node
const fs = require('fs');
const inquirer = require('inquirer');

//array to build team
const teamArray = [];
const idArray = [];
const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "team.HTML");
const render = require("./src/page-template");
// const pageTemplate = require('./src/page-template');

//prompts
const appMenu = () => {
    const addManager = () => {
        return inquirer
            .prompt([
                {
                    name: "name",
                    type: "input",
                    message: "What is the name of the manager of this team?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("please enter the managers name to continue");
                            return false;
                        }
                    }
                },
                {
                    name: "id",
                    type: "input",
                    message: "Enter the managers ID number",
                    validate: nameInput => {
                        if (isNaN(nameInput)) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "please enter the managers email to continue",
                    validate: emailInput => {
                        if (emailInput) {
                            return true
                        } else {
                            console.log("please enter managers email to continue")
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "what is the managers office number?",
                    validate: officeNumberInput => {
                        if (isNaN(officeNumberInput)) {
                            console.log('please enter numbers to continue')
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            ])
            .then(managerInput => {
                const { name, id, email, officeNumber } = managerInput;
                const manager = new Manager(name, id, email, officeNumber);
                teamArray.push(manager);
                idArray.push(id)
                console.log(manager);
                addEmployee();
            })
    };
    const addEmployee = () => {
        return inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "choose the employees role",
                choices: ['engineer', 'intern', 'no one else to add']
            }
        ]).then(userChoice => {
            switch (userChoice.role) {
                case "engineer":
                    addEngineer();
                    break;
                case "intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        })
    }
    const addEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "what is the engineers name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("please enter engineers name to continue")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "enter engineers ID number",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log("please enter numbers to continue")
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "please enter the engineers email to continue",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log("please enter engineers email to continue")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "please enter the engineers github username to continue",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log("please enter engineers github username to continue")
                    }
                }
            },
        ]).then(engineerInput => {
            const { name, id, email, github } = engineerInput;
            const engineer = new Engineer(name, id, email, github);
            teamArray.push(engineer);
            idArray.push(id)
            console.log(engineer);
            addEmployee();
          
        })
    }
    const addIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "what is the interns name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("please enter interns name to continue")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "enter interns ID number",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log("please enter numbers to continue")
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "please enter the interns email to continue",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log("please enter interns email to continue")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "please enter the interns school to continue",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true
                    } else {
                        console.log("please enter interns school username to continue")
                    }
                }
            },
        ]).then(internInput => {
            const { name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);
            teamArray.push(intern);
            idArray.push(id)
            console.log(intern);
            addEmployee();
        })
    };
    const buildTeam = () => {
        if (!fs.existsSync(output_dir)) {
            fs.mkdirSync(output_dir)
        }
        fs.writeFileSync(outputPath, render(teamArray), 'utf-8')
        console.log(outputPath)
        console.log(teamArray)
    
    }
    addManager();
};
appMenu();

//gen 
//css file in output and dir

