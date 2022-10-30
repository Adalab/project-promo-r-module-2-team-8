const arrowUp = document.querySelectorAll('.legend--arrow--up'); //flecha para cerrar los menús
const arrowDown = document.querySelectorAll('.legend--arrow--down'); //flecha para abrir los menús
const designBox = document.querySelector('.js-design'); //div de "diseña"
const fillBox = document.querySelector('.js-fill'); //div de "rellena"
const formBox = document.querySelector('.js-form'); //div de "comparte"



"use strict";
//funciones para "diseña"

function classCollapseDesign (event) {
    event.preventDefault();
    arrowDesign();
    fillBox.classList.add('collapse');
    formBox.classList.add('collapse');
    designBox.classList.toggle('collapse');
}
function arrowDesign (){
    if (arrowUp[0].classList.contains('collapse')){
        arrowUp[0].classList.remove('collapse');
        arrowDown[0].classList.add('collapse');
    }else {
        arrowUp[0].classList.add('collapse');
        arrowDown[0].classList.remove('collapse');
    }
}

//funciones para "rellena"

function classCollapseFill (event) {
    event.preventDefault();
    arrowFill();
    formBox.classList.add('collapse');
    designBox.classList.add('collapse');
    fillBox.classList.toggle('collapse');
}

function arrowFill (){
    if (arrowUp[1].classList.contains('collapse')){
        arrowUp[1].classList.remove('collapse');
        arrowDown[1].classList.add('collapse');
    }else {
        arrowUp[1].classList.add('collapse');
        arrowDown[1].classList.remove('collapse');
    }
}

//funciones para "comparte"
function classCollapseForm (event) {
    event.preventDefault();  
    arrowForm ();        
    designBox.classList.add('collapse');
    fillBox.classList.add('collapse');   
    formBox.classList.toggle('collapse');
};

function arrowForm (){
    if (arrowUp[2].classList.contains('collapse')){
        arrowUp[2].classList.remove('collapse');
        arrowDown[2].classList.add('collapse');
    }else {
        arrowUp[2].classList.add('collapse');
        arrowDown[2].classList.remove('collapse');
    }
};

//eventos  
arrowUp[0].addEventListener('click', classCollapseDesign);
arrowUp[1].addEventListener('click', classCollapseFill);
arrowUp[2].addEventListener('click', classCollapseForm);

arrowDown[0].addEventListener('click', classCollapseDesign);
arrowDown[1].addEventListener('click', classCollapseFill);
arrowDown[2].addEventListener('click', classCollapseForm);


"use strict";

//# sourceMappingURL=main.js.map
