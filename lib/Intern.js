
class Intern{
    constructor(name, email, id, school) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.school = school;
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
        return Intern;
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;