//creating Manager subclass extending employee parent class using
//import employee class
//user super function

const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, id, email, role, officeNo){
        super (name, id, email, role);
        this.officeNo = officeNo;
    }

    getOfficeNo(){
        return this.officeNo;
    }
}

module.exports = Manager; 

//Instantiate object 
// const M1 = new Manager('Mag', '1', 'Mag@gmail.com', 'Manager','2');
// console.log(M1);
