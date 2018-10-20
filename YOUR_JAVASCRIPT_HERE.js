// Write your JS here
const hero = {
  name: "Merk",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "sword",
    damage: 2
  }
};

function rest(obj){
  obj.health = 10;
  return obj;
}

const inn = document.getElementById("inn");
inn.addEventListener("click", function(event) {
 rest(hero);
})

function pickUpItem(heroObj, weaponObj){
  return heroObj.inventory.push(weaponObj);
}

const newWeapon = {
  type: "dagger",
  damage: 2
}

const dagger = document.getElementById("dagger");
dagger.addEventListener("click", function(event){
  pickUpItem(hero, newWeapon)
})

function equipWeapon(heroObj){
  if(heroObj.inventory.length > 0) {
    heroObj.weapon = heroObj.inventory[0];
  }
 
}



