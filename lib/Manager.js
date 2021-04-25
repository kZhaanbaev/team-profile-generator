
class Manager{
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber;
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

}