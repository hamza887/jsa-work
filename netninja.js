

class user {
    constructor(name,email){
        this.name=name;
        this.email=email;
        this.score=0;
    }
    adduser(){
        console.log(this.name ,'user has been added');
        return this;
    }
    updateScore(){
        console.log(this.score++);
        return this;
    }
}

const hamza= new user('hamza','hamza@gmail.com');
const john= new user('john','hamza@gmail.com')

console.log(hamza);

hamza.adduser();
john.adduser();
hamza.updateScore().updateScore().updateScore().adduser()