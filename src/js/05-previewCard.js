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
