

var arry = [
  {
  qut1:"“So many books, so little time.”",
  qut2:" ― Frank Zapp",
},
  {
    qut1:"“A room without books is like a body without a soul.”",
    qut2:" ― Marcus Tullius Cicero  ",
},
  {
    qut1:" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    qut2:" ― Albert Einstein ",
},
  {
    qut1:" “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
    qut2:" ― Dr. Seuss ",
   
},
  {
    qut1:" “Be the change that you wish to see in the world.” ",
    qut2:" ― Mahatma Gandhi ",
}
];

var lastHero;

function getquote() {

var hero;
  
  hero = Math.round(Math.random() * (arry.length - 1));
  
  // If hero is the same as lastHero, preincrement it
  if (hero == lastHero) {
    hero++
  }
lastHero = hero; // Update lastHero with the current index

document.querySelector("h2").innerHTML = arry[hero].qut1;
document.querySelector("h3").innerHTML = arry[hero].qut2;

console.log(hero)
}


