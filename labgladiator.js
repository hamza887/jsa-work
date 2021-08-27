class Gladiator{
    constructor(name,weapon){
        this.name=name;
        this.weapon=('Spear'===weapon|| 'Trident'===weapon || 'Club'===weapon)?weapon:"not a weapon";
    }
}

// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"

class Arena{
    constructor(name){
        this.name=name.charAt(0).toUpperCase()+name.slice(1);
        this.gladiators=[]
    }
    addGladiator(add){
        if(this.gladiators.length<2){
      this.gladiators.push(add)}
      else{
          console.log('There should be 2 fighters');
      }
    }
    fight(){
        if (this.gladiators.legth<=1) {
            return;
        }
        const kill= Math.round(Math.random());
        this.gladiators.splice(kill,1)
    }

}
// const colosseum = new Arena("Colosseum");
// console.log(colosseum.name); // => Colosseum

const megalopolis = new Arena("megalopolis");
console.log(megalopolis.name); // => Megalopolis

// const colosseum = new Arena("Colosseum");
// console.log(colosseum.gladiators); // => []

const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Sword");
const andronicus = new Gladiator("Andronicus", "Sword");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);
// console.log(colosseum.gladiators.length); // => 2
// colosseum.fight()

const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max); // => []
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators);
colosseum.fight();
console.log(colosseum.gladiators);

