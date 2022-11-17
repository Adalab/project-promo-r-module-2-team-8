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
