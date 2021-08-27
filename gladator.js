console.log('helelo');

class Gladiator{
    constructor(name,weapon,gladiators){
        this.name=name.charAt(0).toUpperCase()+name.slice(1);
        this.weapon= ('spear'===weapon|| 'trident'===weapon || 'club'===weapon)?weapon:"not a weapon";
        this.gladiators=gladiators;
    }

}
class Arena extends Gladiator{
    
    addgladiator(add){
      this.gladiators=add
      console.log(add);
    }
}
const gg= new Gladiator('hamza','cluggdfgb')
console.log(gg);

// var colosseum = new Arena("Colosseum")
// console.log(colosseum.name) 
// // => Colosseum
// // colosseum.named()
// var colosseum = new Arena("megalopolis")
// console.log(colosseum.name) 
// // => Megalopolis

// var colosseum = new Arena("Colosseum")
// console.log(colosseum.gladiators) 
// // => []
// var max = new Gladiator("Maximus","Trident")
// var colosseum = new Arena("Colosseum")
// colosseum.addgladiator(max)
// console.log(colosseum.gladiators) // => [Gladiator]

var max = new Gladiator("Maximus","Trident")
var titus = new Gladiator("Titus","Sword")
var andronicus = new Gladiator("Andronicus","Sword")
var colosseum = new Arena("Colosseum")
colosseum.addgladiator(max)
colosseum.addgladiator(titus)
colosseum.addgladiator(andronicus)
console.log(colosseum.gladiators.length) // => 2