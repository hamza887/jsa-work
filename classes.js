console.log('hello classes');

class Car{
    constructor(make,model,color){
        this.make=make;
        this.model=model;
        this.color=color;
    }
    drive(){
        console.log('vroom vroom')
    }
};

const corolla=new Car('toyota','carolla','grey');
console.log(corolla.drive());

class Animal{
    constructor(name,types,region){
        this.name=name;
        this.types=types;
        this.region=region;
    }
    eat(){
        console.log('I have eaten the food')
    }
    regional(){
        console.log(`I am from ${this.region} region`);
    }
}
const lion= new Animal('lionking','carnivore','africa')



console.log(lion.region);






