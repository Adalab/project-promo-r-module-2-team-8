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

palette1.addEventListener('click', (event) => {
  cleanPalette();
  motherOfPalettes.classList.add('palette-1');
  data.palette = 1;
  console.log(event.currentTarget);
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
