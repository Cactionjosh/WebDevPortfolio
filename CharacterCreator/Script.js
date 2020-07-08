//First Name + Last Name, armor, health, speed, strength, dexterity,constitution, intelligence, wisdom, charisma
//notes, class, alignement, race, sex, background
var fname = ["Grog", "Nuts", "Thor", "Lonk", "Juice", "Raik", "Cupe", "Mil","Share","Padd"]
var fnamelength = fname.length;
var rand1 =  Math.floor(Math.random() * fnamelength);

var lname = ["Pog", "Oaksen", "Bumb", "Oaren", "Drink", "Wawa", "Skrill", "Brown"]
var lnamelength = lname.length;
var rand2 =  Math.floor(Math.random() * lnamelength);
document.getElementById("demo").innerHTML = fname[rand1] + " " + lname[rand2];

var armor =  Math.floor(Math.random() * 18);
var health =  Math.floor(Math.random() * 18);
var speed =  Math.floor(Math.random() * 18);

document.getElementById("armor").innerHTML = armor;
document.getElementById("health").innerHTML = health;
document.getElementById("speed").innerHTML = speed;

var strength =  Math.floor(Math.random() * 18);
var dexterity =  Math.floor(Math.random() * 18);
var constitution =  Math.floor(Math.random() * 18);
var intelligence =  Math.floor(Math.random() * 18);
var wisdom =  Math.floor(Math.random() * 18);
var charisma =  Math.floor(Math.random() * 18);

document.getElementById("strength").innerHTML = strength;
document.getElementById("dexterity").innerHTML = dexterity;
document.getElementById("constitution").innerHTML = constitution;
document.getElementById("intelligence").innerHTML = intelligence;
document.getElementById("wisdom").innerHTML = wisdom;
document.getElementById("charisma").innerHTML = charisma;

var dndclass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rouge", "Sorcerer"]
var dndclasslength = dndclass.length;
var rand3 =  Math.floor(Math.random() * dndclasslength);
document.getElementById("dndclass").innerHTML = dndclass[rand3];

var alignment = ["Good", "Neutral", "Evil", "Super Evil"]
var alignmentlength = alignment.length;
var rand4 =  Math.floor(Math.random() * alignmentlength);
document.getElementById("alignment").innerHTML = alignment[rand4];


var sex = ["Male", "Female", "Other"]
var sexlength = sex.length;
var rand5 =  Math.floor(Math.random() * sexlength);
document.getElementById("sex").innerHTML = sex[rand5];


var background = ["Prize Fighter", "Shop Owner", "Noble", "Shoe Maker", "Student", "Chief", "Old Knight"]
var backgroundlength = background.length;
var rand6 =  Math.floor(Math.random() * backgroundlength);
document.getElementById("background").innerHTML = background[rand6];

var race = ["Human", "Orc", "Kobold", "Goblin", "Dwarf", "Elf", "Halfling", "Dragon", "Tiefling"]
var racelength = race.length;
var rand7 =  Math.floor(Math.random() * racelength);
document.getElementById("race").innerHTML = race[rand7];

var feature = [" They have a massive bald spot.", " They have blue hair.", " They have 6 fingers on each hand.",
 " They always have crumbs on their face.", " They like to wear a hat.", " A book can always be seen in their hands.",
  " Every week they have a new hair color.", " They have a pencil tucked between their ear."]
var featurelength = feature.length;
var rand8 =  Math.floor(Math.random() * featurelength);


var traits = [" struggles to say the word almond.", " has a really bad temper because they hardly get sleep.",
  " has to wear glasses because they're nearsighted.", " tries to maintain a cool composer, but they're constantly stressed.",
  " can bench press 300lbs.", " has a deep jealously of elves because they're perfect.",
  " is terrified of the ocean and refuses to swim."]
var traitslength = traits.length;
var rand9 =  Math.floor(Math.random() * traitslength);
document.getElementById("f&t").innerHTML = fname[rand1] + " " + lname[rand2] + traits[rand9] + feature[rand8];




