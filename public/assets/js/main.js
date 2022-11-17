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

//constantes para la sección comparte
const submitBtn = document.querySelector('.js_button_submit');
const cardContainer = document.querySelector('.js_card_container');
const urlCreateCard = document.querySelector('.js_url');
const boxSubmitBtn = document.querySelector('.form__box'); //div boton crear tarjeta
const cardShareTitle = document.querySelector('.js_card_title');

// compartir en twitter
const twitterShare = document.querySelector('.js-twitter');
const containerTwitter = document.querySelector('.container__twitter');

//inputs del form para escribir con el localStorage
const inputName = document.querySelector('.js_input_name');
const inputJob = document.querySelector('.js_input_job');
const inputPhoto = document.querySelector('.js_input_photo');
const inputEmail = document.querySelector('.js_input_email');
const inputPhone = document.querySelector('.js_input_phone');
const inputLinkedin = document.querySelector('.js_input_linkedin');
const inputGithub = document.querySelector('.js_input_github');


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


'use strict';

let data = {
  name: 'Nombre Apellido',
  job: 'front-end unicorn',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1,
};

'use strict';

//lee el input y lo manda al objeto data
function handleInput(event) {
  event.preventDefault();
  const elementName = event.target.name;
  const value = event.target.value;
  data[elementName] = value;
  renderCard();
  saveInLocalStorage(data);
  console.log({ elementName, value });
}

//función para escribir el input en el preview de la tarjeta
function renderCard() {
  telephoneCard.href = data['phone'];
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
}

function cleanPalette() {
  motherOfPalettes.classList.remove('palette-1');
  motherOfPalettes.classList.remove('palette-2');
  motherOfPalettes.classList.remove('palette-3');
}

// cambio de paleta cuando clicko
//se puede poner un solo evento? con currentTarget

palette1.addEventListener('click', () => {
  cleanPalette();
  motherOfPalettes.classList.add('palette-1');
  data.palette = 1;
});

palette2.addEventListener('click', () => {
  cleanPalette();
  motherOfPalettes.classList.add('palette-2');
  data.palette = 2;
});

palette3.addEventListener('click', () => {
  cleanPalette();
  motherOfPalettes.classList.add('palette-3');
  data.palette = 3;
});

form.addEventListener('input', handleInput); //evento de escucha de los input del formulario

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
    data.photo = fr.result;
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
    cleanPalette();
    motherOfPalettes.classList.add('palette-1')
    profileImage.style.backgroundImage = '';
    profilePreview.style.backgroundImage = '';
    selectCheck()
}
//para limpiar el formulario
function cleanForm() {
    for (input of allInput) {
        input.value = '';
    }
    localStorage.removeItem('dataFromForm');
}
//para limpiar la tarjeta
function cleanCard(data) {
    for (let item in data) { //parece como "for (i=0; )... [i]"
        data[item] = '';
    }
}
//para dejar marcada la paleta 1
function selectCheck() {
    palette1.checked = true;
}
//evento
resetBtn.addEventListener('click', handleReset);
'use strict';

function handleCreateCard(event) {
  event.preventDefault();
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())

    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.success) {
        cardContainer.classList.remove('collapse');
        cardShareTitle.innerHTML = 'La tarjeta ha sido creada:';
        urlCreateCard.innerHTML = responseJson.cardURL;
        containerTwitter.classList.remove('collapse');
      } else {
        cardContainer.classList.remove('collapse');
        urlCreateCard.innerHTML = `No has rellenado todos los campos`;
      }
      markSuccessBtn();
    });
}
submitBtn.addEventListener('click', handleCreateCard);

function markSuccessBtn() {
  submitBtn.classList.add('successBtn');
  boxSubmitBtn.classList.add('successBtn');
}

'use strict';

function saveInLocalStorage(data) {
  localStorage.setItem('dataFromForm', JSON.stringify(data));
}

data = JSON.parse(localStorage.getItem('dataFromForm'));
if (data !== null) {
  renderCard();
  writeInput();
}

function writeInput() {
  inputName.value = data.name;
  inputJob.value = data.job;
  if (data.photo) {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
  inputPhone.value = data.phone;
  inputEmail.value = data.email;
  inputLinkedin.value = data.linkedin;
  inputGithub.value = data.github;
}

//# sourceMappingURL=main.js.map
