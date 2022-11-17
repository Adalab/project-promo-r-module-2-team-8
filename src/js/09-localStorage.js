'use strict';

function saveInLocalStorage(data){
    localStorage.setItem('dataFromForm', JSON.stringify(data));
}

function writeInput() {
    data = JSON.parse(localStorage.getItem('dataFromForm'));
  inputName.value = data.name;
  inputJob.value = data.job;
  if (data.photo) {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
  inputPhone.value = data.phone;
  inputEmail.value = data.email;
  inputLinkedin.value = data.linkedin;
  inputGithub.value = data.github;
}
if (JSON.parse(localStorage.getItem('dataFromForm'))) {
    renderCard();
    writeInput();
  } 
