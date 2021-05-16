const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    
    }

    getRole() {
        return 'Engineer';
    }
    getgithubUsername() {
        return `http://www.github.com/${this.githubUsername}`;
        return this.githubUsername;
    }
}

module.exports = Engineer;