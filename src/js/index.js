import '../scss/main.scss';
import moment from 'moment';
/* place your code below */

console.log('HELLO 🚀')

/*const info = document.querySelector(".section__paragraph--js");
console.log(info);

info.innerHTML = "Ten paragraf został napisany za pomocą JavaScript";

let person1 = {
  name: "Justyna",
  age: 31,
  drivingLicense: true,
};

let person2 = {
  name: "Piotr",
  age: 48,
  drivingLicense: true,
};

function greet(name, age) {
  return console.log(
    `Witaj ${name} , patrząc na Ciebie podejrzewam że masz ${age} lat :) `
  );
}

greet(person1.name, person1.age);
greet(person2.name, person2.age);
 */
const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', ()=>{
  const navi = document.querySelector('.navigation--js');
  navi.classList.toggle('navigation--open');
  console.log('klik');
})

console.log(moment().startOf('day').fromNow());


const MyClock = (time) => {
    const hour = document.querySelector(".section__paragraph--js");
    time = moment().format('MMMM Do YYYY, h:mm:ss a');
    hour.innerHTML = time;
   
}
setInterval(MyClock, 1000);
