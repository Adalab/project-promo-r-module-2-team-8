const arrow = document.querySelector('.legend--arrow'); //flecha para abrir y cerrar los menús
const designBox= document.querySelector('.js-design'); //div de "diseña"
const fillBox= document.querySelector('.js-fill'); //div de "rellena"
const formBox= document.querySelector('.js-form'); //div de "comparte"



"use strict";
arrow.addEventListener('click', (event) =>{
    event.preventDefault();
    console.log(event.currentTarget);
    if (event.currentTarget.classList.contains('diseña')){        
        fillBox.classList.add('collapse');
        formBox.classList.add('collapse');
        designBox.classList.toggle('collapse');
    }  else if  (event.currentTarget.classList.contains('comparte')){ 
        console.log (event.currentTarget);
        fillBox.classList.add('collapse');
        designBox.classList.add('collapse');
        formBox.classList.remove('collapse');
    }
});
//flechita para abajo <i class="fa-solid fa-angle-down"></i>
// flechita para arriba <i class="fa-solid fa-angle-up"></i>
//# sourceMappingURL=main.js.map
