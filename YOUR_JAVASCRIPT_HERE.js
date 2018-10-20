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
  // hero.health = 10;
  // return hero.health;
  return rest(hero);
})

function pickUpItem(heroObj, obj){
  return heroObj.inventory.push(obj);

}

function equipWeapon(){
  
}

