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
const boxSubmitBtn = document.querySelector('.js_form_box');
const cardShareTitle = document.querySelector('.js_card_title');

//compartir en twitter
const twitterShare = document.querySelector('.js_twitter');
const containerTwitter = document.querySelector('.js_container__twitter');

//inputs del form para escribir en el localStorage

const inputName = document.querySelector('.js_input_name');
const inputJob = document.querySelector('.js_input_job');
const inputPhoto = document.querySelector('.js_input_photo');
const inputEmail = document.querySelector('.js_input_email');
const inputPhone = document.querySelector('.js_input_phone');
const inputLinkedin = document.querySelector('.js_input_linkedin');
const inputGithub = document.querySelector('.js_input_github');
