

class user {
    constructor(name,email){
        this.name=name;
        this.email=email
    }
    adduser(){
        console.log(this.name ,'user has been added');
    }
}

const hamza= new user('hamza','hamza@gmail.com')

console.log(hamza);