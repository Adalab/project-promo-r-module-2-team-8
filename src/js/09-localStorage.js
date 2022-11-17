'use strict';

function saveInLocalStorage(data) {
  localStorage.setItem('dataFromForm', JSON.stringify(data));
}

data = JSON.parse(localStorage.getItem('dataFromForm'));
if (data !== null) {
  renderCard();
  writeInput();
}

function writeInput() {
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
