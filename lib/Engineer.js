
class Engineer{
    constructor(name, email, id, github) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.github = github;
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
        return Engineer;
    }

    getGithub(){
        return this.github;
    }

}

module.exports = Engineer;