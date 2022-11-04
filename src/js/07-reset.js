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