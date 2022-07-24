let pushZippen = document.querySelector('.btn__zipp');
let wrap1 = document.querySelector('.wrap');
let pushKesh = document.querySelector('.btn__kesha');
let pushTuchka = document.querySelector('.btn__tuchka');

pushTuchka.addEventListener('click', () => {
    wrap1.classList.add ('currentScreen');
    let tuchka = document.createElement('div');
    tuchka.classList.add('tuschka', 'img__content');
    wrap1.append(tuchka);
});

pushZippen.addEventListener('click', () => {
    wrap1.classList.add ('currentScreen');
    let zipp = document.createElement('div');
    zipp.classList.add('zipper', 'img__content');
    wrap1.append(zipp);
});

pushKesh.addEventListener('click', () => {
    wrap1.classList.add ('currentScreen');
    let kesh = document.createElement('div');
    kesh.classList.add('keshenator', 'img__content');
    wrap1.append(kesh);
});

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
 

