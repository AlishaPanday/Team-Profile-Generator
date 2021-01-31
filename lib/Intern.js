//creating Intern subclass extending employee parent class using
//import employee class
//user super fucntion

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }


    getSchool() {
        return this.school;
    }

}

module.exports = Intern;

//Instantiate object 
// const I1 = new Intern('rani', '4', 'ani@gmail.com', 'Intern','pray');
// console.log(I1);
