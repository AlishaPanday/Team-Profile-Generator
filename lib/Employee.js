//creating class constructor for employee
//require name , id, email as a parameter
//require method getName(), getID(), getEmail(), getRole()

class Employee  {
    constructor(name, email, id, role) {
        this.name = name;
        this.id = email;
        this.id = id;   
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getEmail() {
    
        return this.email;
    }
    getID() {
        return this.id;
    }

    getRole(){
        return this.role;
    }
}
//exporting Employee class 
module.exports = Employee; 

// Instantiate object 
// const Employee1 = new Employee ('Alisha', '1', 'alisha@gmail.com', 'Manager');
// const Employee2 = new Employee ('lisha', '2', 'ha@gmail.com', 'Intern');
// console.log(Employee1);
// console.log(Employee2);