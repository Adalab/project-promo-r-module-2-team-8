const arrowUp = document.querySelectorAll('.legend--arrow--up'); //flecha para cerrar los menús
const arrowDown = document.querySelectorAll('.legend--arrow--down'); //flecha para abrir los menús
const designBox = document.querySelector('.js-design'); //div de "diseña"
const fillBox = document.querySelector('.js-fill'); //div de "rellena"
const formBox = document.querySelector('.js-form'); //div de "comparte"
const form = document.querySelector('.container-form'); //formulario general Create


//constantes del preview de la tarjeta
const nameCard = document.querySelector('.preview__name');
const jobCard = document.querySelector('.preview__job');
const telephoneCard = document.querySelector('.telephone');
const emailadressCard = document.querySelector('.emailadress');
const linkedinCard = document.querySelector('.linkedin');
const gitHubCard = document.querySelector('.github');


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

const data = {
    name: 'Nombre Apellido',
    job: 'front-end unicorn',
    emailaddress: '',
    telephone: '',
    linkedin: '',
    github: '',
};

"use strict";

//lee el input y lo manda al objeto data
function handleInput(event) {
    event.preventDefault();
    const elementName = event.target.name;
    const value = event.target.value;
    data[elementName] = value;
    renderCard();
    console.log({ elementName, value });
}

//función para escribir el input en el preview de la tarjeta
function renderCard() {
    telephoneCard.href = data['telephone'];
    emailadressCard.href = data['emailadress'];
    gitHubCard.href = data['github'];
    linkedinCard.href = data['linkedin'];
    if (data['name'] === '') {
        nameCard.innerHTML = 'Nombre Apellido';
    } else {
        nameCard.innerHTML = data['name'];
    }
    if (data['job'] === '') {
        jobCard.innerHTML = 'front-end unicorn';
    } else {
        jobCard.innerHTML = data['job'];
    }
};

form.addEventListener('input', handleInput)//evento de escucha de los input del formulario


'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');


/**
 * Recoge el archivo añadido al campo de tipo "file" línea 25 rellenahtml
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */
function getImage(e) {
    const myFile = e.currentTarget.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
    /* En la propiedad `result` de nuestro FR se almacena
     * el resultado. Ese resultado de procesar el fichero que hemos cargado
     * podemos pasarlo como background a la imagen de perfil y a la vista previa
     * de nuestro componente.
     */
    profileImage.style.backgroundImage = `url(${fr.result})`;
    profilePreview.style.backgroundImage = `url(${fr.result})`;
}


/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);
//# sourceMappingURL=main.js.map
