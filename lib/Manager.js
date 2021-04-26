
class Manager{
    constructor(name, email, id, officeNumber) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return Manager;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

}

module.exports = Manager;