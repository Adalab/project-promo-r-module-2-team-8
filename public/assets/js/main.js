const arrowUp = document.querySelectorAll('.legend--arrow--up'); //flecha para cerrar los menús
const arrowDown = document.querySelectorAll('.legend--arrow--down'); //flecha para abrir los menús
const designBox = document.querySelector('.js-design'); //div de "diseña"
const fillBox = document.querySelector('.js-fill'); //div de "rellena"
const formBox = document.querySelector('.js-form'); //div de "comparte"
const form = document.querySelector('.container-form'); //formulario general Create
// palettes
const palette1 = document.querySelector('.js-btn-green');
const palette2 = document.querySelector('.js-btn-red');
const palette3 = document.querySelector('.js-btn-grey');
const motherOfPalettes = document.querySelector('.js-mother-of-palettes');


//constantes del preview de la tarjeta
const nameCard = document.querySelector('.preview__name');
const jobCard = document.querySelector('.preview__job');
const telephoneCard = document.querySelector('.telephone');
const emailadressCard = document.querySelector('.emailadress');
const linkedinCard = document.querySelector('.linkedin');
const gitHubCard = document.querySelector('.github');


//constantes para el botón de reset
const resetBtn = document.querySelector('.preview__button');
const allInput = document.querySelectorAll('.js-input');


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
    photo: '',
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



palette1.addEventListener('click', () => {
    motherOfPalettes.classList.remove('palette-2');
    motherOfPalettes.classList.remove('palette-3');
    motherOfPalettes.classList.add('palette-1');
});


palette2.addEventListener('click', () => {
    motherOfPalettes.classList.remove('palette-1');
    motherOfPalettes.classList.remove('palette-3');
    motherOfPalettes.classList.add('palette-2');
});

form.addEventListener('input', handleInput)//evento de escucha de los input del formulario

//designBox.addEventListener('click', handlePalette1) // evento para las paletas

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
'use strict'

function handleReset(event) {
    event.preventDefault();
    cleanForm();
    cleanCard(data);
    renderCard();
    //cambiar la paleta
    //cambiar la foto con profileImage (es la variable)
}

//para limpiar el formulario
function cleanForm() {
    for (input of allInput) {
        input.value = '';
    }
}

//para limpiar la tarjeta
function cleanCard(data) {
    data.name = 'Nombre Apellido';
    data.job = 'front-end unicorn';
    data.emailaddress = '';
    data.telephone = '';
    data.linkedin = '';
    data.github = '';
}

//evento
resetBtn.addEventListener('click', handleReset);
//# sourceMappingURL=main.js.map
