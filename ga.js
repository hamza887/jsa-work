class Player{
    constructor(name,height){
        this.name=name;
        this.height=height;
    }
    run(){
        console.log(this.name, 'runs really fast');
    }
}

const player1= new Player('hamza','55');
console.log(player1);
player1.run();


class Movie{
    constructor(title,length){
        this.title=title;
        this.length=length
    }
    play(){
        console.log(this.title, ' play it plz');
    }
}

const Movie1= new Movie('hamza film','120');
console.log(Movie1);
Movie1.play();


class Building{
    constructor(type,squareFeet){
        this.type=type;
        this.squareFeet=squareFeet
    }
    addTenant(){
        console.log("This",this.type, 'building has this type');
    }
}

const Building1= new Building('hamza building','Manhattan');
console.log(Building1);
Building1.addTenant();

/////////// MAKING AN ATM ///////////////////////


class ATM{
    constructor(type,money){
        this.type=type;
        this.money=money;
    }
    withdraw(amount){
        const withdrawmoney= this.money-amount;
        console.log(`Your Withdraw money has been approved ${withdrawmoney}$`);
        console.log('total money left', this.money)
    }
    deposit(amount){
      const increase= this.money+amount;
      console.log(increase);
    }
}

const hamza= new ATM('checking',200)
console.log(hamza);
hamza.withdraw(120);
hamza.deposit(200)

