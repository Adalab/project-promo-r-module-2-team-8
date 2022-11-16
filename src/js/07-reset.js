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