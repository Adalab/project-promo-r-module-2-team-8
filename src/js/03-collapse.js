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

