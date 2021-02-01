//fs for writing file
const fs = require('fs');

//inquirer for prompting user for their response
const inquirer = require('inquirer');

// importing constructor functions
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//importing layout template file
const generateTemplate = require('./src/layout-template');


//importing generate function 
const generateHtml = require('./generate-html');

//creating empty array to store user input

const teamMembers = [];

//prompting userinput 

function userInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Employee Name: ',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter Employee Name.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Employee Id: ',
            name: 'id',
            validate: function (idInput) {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter Employee Id.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Email: ',
            name: 'email',
            validate: function (emailInput) {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter Employee e-mail address.';
                }
            }
        },

        {
            type: 'list',
            message: 'Select Role: ',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"]

        },

    ])
    .then(function (answers) {

            if (answers.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        message:'Enter office number',
                        name: 'officeNum',
                        validate: function (numInput) {
                            if (numInput) {
                                return true;
                            } else {
                                return 'Please enter office No.';
                            }
                        }
                        
                    }
                ])
                .then(response => {
                    console.log(response.officeNum);
                    const MangaerTeam = new Manager (answers.name, answers.id, answers.email, ans.OfficeNum);
                    teamMembers.push(ManagerTeam);
                    addOption();
                })
            }else if(answers.role === 'Engineer' ){
                inquirer.prompt([
                    {
                        type: 'input',
                        message:'Enter Github name:',
                        name: 'gitHub',
                        validate: function (githubInput) {
                            if (githubInput) {
                                return true;
                            } else {
                                return 'Please enter gitHub name.';
                            }
                        }
                    }
                ])
                .then(response => {
                    console.log(response.gitHub);
                    const EngineerTeam = new Engineer (answers.name, answers.id, answers.email, response.gitHub);
                    teamMembers.push(EngineerTeam);
                    addOption();
                })
            } else if (answers.role === 'Intern'){
                inquirer.prompt([
                    {
                        type: 'input',
                        message:'Enter School name:',
                        name: 'school',
                        validate: function (schoolInput) {
                            if (schoolInput) {
                                return true;
                            } else {
                                return 'Please enter school  name.';
                            }
                        }

                    }
                ])
                .then(response =>{
                    console.log(response.school);
                    const internTeam = new Intern (answers.name, answers.id, answers.email,response.school);
                    teamMembers.push(interTeam);
                    addOption();
                })
            }

            else {
                const employeeTeam = new Employee (answers.name, answers.id, answers.email);
                teamMembers.push(employeeTeam);
                addOption();

            }

            //add option 

            function addOption() {
                inquirer.prompt([
                    {
                        type:'confirm',
                        name: 'addMore',
                        message:'Would you like to add another Employee?'
                    }
                ])
                .then(ans =>{
                    if(ans.addMore === true){
                        userInfo(teamMembers);
                    }else{
                        let cardLayoutHtml = generateTemplate(teamMembers);
                        generateHtml(cardLayoutHtml)
                    }
                })
            }
        })
}


userInfo();





