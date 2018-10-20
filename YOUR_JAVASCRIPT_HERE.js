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
// console.log(hero)

function rest(obj){
  obj.health = 10;
  return obj;
}

const inn = document.getElementById("inn");
inn.addEventListener("click", function(event) {
  // hero.health = 10;
  // return hero.health;
  return rest(hero);
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

console.log(hero)
function equipWeapon(){
  
}

