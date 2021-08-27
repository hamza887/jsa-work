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

