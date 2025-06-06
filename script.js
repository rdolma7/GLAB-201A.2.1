//Part 1: Humble Beginnings

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + mod + 1;
    // console.log(`${this.name} rolled a ${result}`)
  },
};
for (let item of adventurer.inventory) {
  // console.log(item);
}
adventurer.roll();

//Part 2 Class Fantasy

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  static Max_Health = 100;

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20 + mod + 1);
    console.log(`${this.name} rolled a ${result}`);
  }
}
// const Robin= new Character("Robin");
// robin.inventory=["sword", "potion", "artifact"];
// robin.companion=new Character("Leo");
// robin.companion.type="Cat"
// robin.companion.companion=new Character("Frank");
// robin.companion.companion.type="Flea";
// robin.companion.companion.inventory=["small hat", "sunglasses"];

// robin.roll();
// robin.companion.roll();

//Part 3: Class Features
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}
// What else should an adventurer be able to do? What other properties should they have?
// Next, create a Companion class with properties and methods specific to the companions.
// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
