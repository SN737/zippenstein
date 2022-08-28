// let pushZippen = document.querySelector('.btn__zipp');
let wrap1 = document.querySelector('.wrap');
let pushKesh = document.querySelector('.btn__kesha');
let pushTuchka = document.querySelector('.btn__tuchka');
const createNewHero =  document.querySelector('.createnewhero');
import { move } from './features.js';
const findBtn = document.querySelector('.btn__find');
const input = document.querySelector('.input');
let clicks;



findBtn.addEventListener('click', findHero);

function findHero(){
    let value = input.value.toLowerCase();
    input.value = '';
    if (value == 'лисичка'){
        let fox =  new  Multhero('foxy');  
        fox.create();
    } else if (value == 'хрю' || value == 'хрюн' || value == 'свин'){
        let pig =  new  Multhero('pig');  
        pig.create();
    }else if (value =='птица' || value =='синяя птица' || value =='ангри бёрдс' || value =='angry birds'){
        let blueBird =  new  Multhero('blue_bird');  
        blueBird.create();
    
    }else {return;
    }

}


createNewHero.addEventListener('click', ()=> {
  let testHero =  new  Multhero('zipper');  
testHero.create();
});


pushKesh.addEventListener('click', ()=> {
    let kesh =  new  Multhero('keshenator');  
  kesh.create();
  birdAdd ();
  });


pushTuchka.addEventListener('click', tuchkaReady);

function tuchkaReady() {
    wrap1.classList.add ('currentScreen');
    let tuchka = document.createElement('div');
    tuchka.classList.add('tuschka', 'img__content');
    wrap1.append(tuchka);
    let tuchkaReady = document.querySelector('.tuschka');
    move(tuchkaReady);
   
};

// pushZippen.addEventListener('click', () => {
//     wrap1.classList.add ('currentScreen');
//     let zipp = document.createElement('div');
//     zipp.classList.add('zipper', 'img__content');
//     wrap1.append(zipp);
    
// });

// pushKesh.addEventListener('click', () => {
//     wrap1.classList.add ('currentScreen');
//     let kesh = document.createElement('div');
//     kesh.classList.add('keshenator', 'img__content');
//     wrap1.append(kesh);
//     clicks= 0;
//     birdAdd ();
    
// });

const btnReset = document.querySelector('.btn__reset');
//btnReset.addEventListener('click', console.log("очистка"));
btnReset.addEventListener('click', () => {
    resetScreen();
});

function resetScreen() {
   const wrap = document.querySelector('.wrap');
   while (wrap.firstChild) {
   wrap.removeChild(wrap.firstChild);
   }
    //wrap1.classList.remove ('currentScreen');
}

function birdAdd (){
    const keshenator = document.querySelector('.keshenator');
    keshenator.addEventListener('click', ()=>{
        // alert(clicks)
        clicks++;
        if (clicks>3){
            keshenator.remove();
            let bird = document.createElement('div');
            bird.classList.add('aBird', 'img__content');
            wrap1.append(bird);
            clicks= 0;
        }
    
    });
}


class Multhero {
    constructor (name) {
        this.name = name;
    }
    create(name){
    wrap1.classList.add ('currentScreen');
    name = document.createElement('div');    
    name.classList.add(this.name, 'img__content');
    wrap1.append(name);
    clicks =0;    
    move(name);    
    }   
}