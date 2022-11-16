'use strict';

 function handleCreateCard(event){
  event.preventDefault();
  console.log('holis');
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
        urlCreateCard.innerHTML = `${responseJson.cardURL}`;
      } else {
        cardContainer.classList.remove('collapse');
        urlCreateCard.innerHTML = `No has rellenado todos los campos`;
      }
    });
};
submitBtn.addEventListener('click', handleCreateCard);