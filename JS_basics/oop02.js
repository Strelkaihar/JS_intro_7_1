class Character {
    constructor(name, profession, gender, age, strength, hitPoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    }
    printStats() {
        console.log(`My name is ${this.name}, profession is ${this.profession} my gender is ${this.gender}
        age is ${this.age} i have that much power ${this.strength} and my hit point ${this.hitPoints}`);
    }
    isAlive(){
        this.hitPoints > 0 ? console.log("I am alive"): console.log("I am dead");
        
    }
    attack (attackedCharacter){
         attackedCharacter.hitPoints -= this.strength
    }
    levelUp () {
        return console.log(`Level up ${this.age += 1},${this.strength += 5}, ${this.hitPoints += 25}`)
    }
}
const dragon = new Character("Knigth", "Lazy dragon", "Male", 1300, 4000, 5000);
const npc = new Character("Lean", "House keeper", "Female", 15, 50, 60);
console.log(dragon);
console.log(npc);
dragon.isAlive()
npc.printStats()

dragon.attack(npc)
npc.isAlive()
npc.printStats()
dragon.printStats()