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

function rest(obj) {
  obj.health = 10;
  return obj;
}

const inn = document.getElementById("inn");
inn.addEventListener("click", function (event) {
  rest(hero);
})

function pickUpItem(heroObj, weaponObj) {
  return heroObj.inventory.push(weaponObj);
}

const newWeapon = {
  type: "dagger",
  damage: 2
}

const dagger = document.getElementById("dagger");
dagger.addEventListener("click", function (event) {
  pickUpItem(hero, newWeapon);
})

function equipWeapon(heroObj) {
  if (heroObj.inventory.length > 0) {
    heroObj.weapon = heroObj.inventory[0];
  }
}

const bag = document.getElementById("bag");
bag.addEventListener("click", function (event) {
  equipWeapon(hero);
})

//bonus
//#1 write your hero's name, health, weapontype, weapon damage to the page
//this code is not DRY enough, yet

function displayStats(){
const h1El = document.createElement("h1");
const h1Node = document.createTextNode("My Hero:");
h1El.appendChild(h1Node);

const pName = document.createElement("p");
const pNameNode = document.createTextNode(`Name: ${hero.name}`)
pName.appendChild(pNameNode);

const pHealth = document.createElement("p");
const pHealthNode = document.createTextNode(`Health: ${hero.health}`)
pHealth.appendChild(pHealthNode);

const pWeapon = document.createElement("p");
const pWeaponNode = document.createTextNode(`Weapon: ${hero.weapon.type}`)
pWeapon.appendChild(pWeaponNode);

const pDamage = document.createElement("p");
const pDamageNode = document.createTextNode(`Damage: ${hero.weapon.damage}`)
pDamage.appendChild(pDamageNode);


const showStats = document.getElementById("display");
showStats.appendChild(h1El);
showStats.appendChild(pName);
showStats.appendChild(pHealth);
showStats.appendChild(pWeapon);
showStats.appendChild(pDamageNode);

return showStats;
}

displayStats();


//change hero name - to be done / work in progress
