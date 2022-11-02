"use strict";

function handleInput(event) {
    event.preventDefault();
    const elementName = event.target.name;
    const value = event.target.value;
    data[elementName] = value;
    //renderCard();
    console.log({ elementName, value });
}
function renderCard() {
    nameCard.innerHTML = data['name'];
    jobCard.innerHTML = data['job'];
    telephoneCard.href = data['telephone'];
    emailadressCard.href = data['emailadress'];
    gitHubCard.href = data['github'];
    linkedinCard.href = data['linkedin'];

};

form.addEventListener('input', handleInput)//evento de escucha de los input del formulario

