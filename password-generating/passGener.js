const rangeInput = document.getElementById('inputRange');
const passwordLengthText = document.getElementById('passwordLength');
const uppercaseCheckBox = document.getElementById('uppercaseCheckBox');
const lowerCheckBox = document.getElementById('lowerCheckBox');
const numbersCheckBox = document.getElementById('numbersCheckBox');
const symbolsCheckBox = document.getElementById('symbolsCheckBox');
const generatePasswordBtn = document.getElementById('generatePassword');

function updateBackground() {
  const value = rangeInput.value;
  const min = rangeInput.min;
  const max = rangeInput.max;
  const percent = ((value - min) / (max - min)) * 100;
  rangeInput.style.background = `linear-gradient(to right, #80ff00 ${percent}%, #ccc ${percent}%)`;
}

function updatePasswordLength(){
  passwordLengthText.innerHTML = rangeInput.value;
}

function checkPasswordOptions(){
  return;
}

uppercaseCheckBox.addEventListener('click', () => {
  uppercaseCheckBox.classList.add('active');
  if(uppercaseCheckBox.classList === acrive)
})

lowerCheckBox.addEventListener('click', () => {
  lowerCheckBox.classList.add('active');
  if(uppercaseCheckBox.classList === acrive)
})

numbersCheckBox.addEventListener('click', () => {
  numbersCheckBox.classList.add('active');
  if(uppercaseCheckBox.classList === acrive)
})

symbolsCheckBox.addEventListener('click', () => {
  symbolsCheckBox.classList.add('active');
  if(uppercaseCheckBox.classList === acrive)
})

rangeInput.addEventListener("input", updateBackground);
updateBackground();

rangeInput.addEventListener("input", updatePasswordLength);
updatePasswordLength();

