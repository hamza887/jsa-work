
class Hamster{
    constructor(name){
        this.name=name;
        this.owner='';
        this.price=15
    }
    wheelRun(){
        console.log('squeak squeak');
    }
    eatFood(){
        console.log('nibble nibble');
    }
    getPrice(){
        console.log(this.price);
    }
}

////// PERSON/////////

class Person{
    constructor(name){
        this.name=name;
        this.age=0;
        this.height=0;
        this.weight=0;
        this.mood=0;
        this.hamsters=[];
        this.bankAccount=0
    }
    getName(){
        console.log(this.name);
    }
    getAge(){
        console.log(this.age);
    }
    getWeight(){
        console.log(this.weight);
    }
    greet(){
        console.log('Welcome hello', this.name);
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        console.log( this.weight--);
    }
    ageUp(){
        console.log(this.age++);
        console.log(this.bankAccount=+10, 'this is your birthdya money');
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        console.log(this.bankAccount-=hamster);
    }
}

// const person1=new Person('hamza',20)
// console.log(person1);
// person1.ageUp();
// console.log(person1);
// person1.buyHamster(5);
// console.log(person1);


/////////   Story of new person /////////

// const timmy= new Person('Timmy');

//  for (let i = 0; i <5; i++) {
//      timmy.ageUp()
     
//  }
//  console.log(timmy);

//  for (let i = 0; i <5; i++) {
//      timmy.eat()
     
//  }
//  console.log(timmy);

//  for (let i = 0; i <5; i++) {
//     timmy.exercise()
    
// }
// console.log(timmy);

// for (let i = 0; i <9; i++) {
//     timmy.ageUp()
    
// }
// console.log(timmy);

// const Gus= new Hamster("Gus");

// Gus.owner='timmy';

// console.log( timmy.buyHamster(Gus));

// timmy.eat();
// timmy.eat()

///////////   Donut Adventure ///////

 class Hero{
     constructor(name){
         this.name=name;
         this.health=100;
         this.weapons={sprinkleSpray: 5,
            sugarShock: 10}
         this.catchPhrases=['i\'m fresher than day old pizza',
         'you can\'t count my calories']
        }
        talkSass(){
            console.log(this.catchPhrases[Math.floor(this.catchPhrases.length * Math.random())]);
        }
        announceHealth(){
            console.log('The current Health is ',this.health);
        }
        fight(){
            console.log('i\'m ready to rumble');
        }
 }

 const hero1= new Hero('hamza')
 console.log(hero1.talkSass());