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
      if (responseJson.success) {
        markSuccessBtn();
        cardContainer.classList.remove('collapse');
        cardShareTitle.innerHTML = 'La tarjeta ha sido creada:';
        urlCreateCard.innerHTML = responseJson.cardURL;
        containerTwitter.classList.remove('collapse');

        twitterShare.href = `https://twitter.com/intent/tweet?text=Esta%20es%20mi%20tarjeta:&url=${responseJson.cardURL}`;
      } else {
        cardContainer.classList.remove('collapse');
        urlCreateCard.innerHTML = `No has rellenado todos los campos`;
      }
    });

};
submitBtn.addEventListener('click', handleCreateCard);

function markSuccessBtn(){
  submitBtn.classList.add('successBtn');
  boxSubmitBtn.classList.add('successBtn');
}
