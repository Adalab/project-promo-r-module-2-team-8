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
    for (let item in data) { //parece como "for (i=0; )... [i]"
        data[item] = '';
    }
}

//evento
resetBtn.addEventListener('click', handleReset);