let pushZippen = document.querySelector('.btn__zipp');
let wrap1 = document.querySelector('.wrap');
let pushKesh = document.querySelector('.btn__kesha');

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
 

