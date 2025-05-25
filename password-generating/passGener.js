const rangeInput = document.getElementById('inputRange');
const passwordLengthNumber = document.getElementById('passwordLength');
const uppercaseCheckBox = document.getElementById('uppercaseCheckBox');
const lowerCheckBox = document.getElementById('lowerCheckBox');
const numbersCheckBox = document.getElementById('numbersCheckBox');
const symbolsCheckBox = document.getElementById('symbolsCheckBox');
const generatePasswordBtn = document.getElementById('generatePassword');
let uppercaseCheckBoxAnswer = ''; 
let lowerCheckBoxAnswer = '';
let numbersCheckBoxAnswer = '';
let symbolsCheckBoxAnswer = '';
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symbols = "!@#$%^&*()_+=-`~[]\{}|;':\",./<>?";
let = characterPool = '';

function updateBackground() {
  const value = rangeInput.value;
  const min = rangeInput.min;
  const max = rangeInput.max;
  const percent = ((value - min) / (max - min)) * 100;
  rangeInput.style.background = `linear-gradient(to right, #80ff00 ${percent}%, #ccc ${percent}%)`;
}

function updatePasswordLength(){
  passwordLengthNumber.innerHTML = rangeInput.value;
}

function checkPasswordOptions(){
  if(uppercaseCheckBoxAnswer) characterPool += upperLetters;
  if(lowerCheckBoxAnswer) characterPool += lowerLetters;
  if(numbersCheckBoxAnswer) characterPool += numbers;
  if(symbolsCheckBoxAnswer) characterPool += symbols;
  console.log(characterPool)
}

uppercaseCheckBox.addEventListener('click', () => {
  if(uppercaseCheckBox.classList.contains('active')){
    uppercaseCheckBox.classList.remove('active');
    uppercaseCheckBoxAnswer = false;
  }
  else{
    uppercaseCheckBox.classList.add('active');
    uppercaseCheckBoxAnswer = true;
  }
  checkPasswordOptions();
})

lowerCheckBox.addEventListener('click', () => {
  if(lowerCheckBox.classList.contains('active')){
    lowerCheckBox.classList.remove('active');
    lowerCheckBoxAnswer = false;
  }
  else{
    lowerCheckBox.classList.add('active');
    lowerCheckBoxAnswer = true;
  }
  checkPasswordOptions();
})

numbersCheckBox.addEventListener('click', () => {
  if(numbersCheckBox.classList.contains('active')){
    numbersCheckBox.classList.remove('active');
    numbersCheckBoxAnswer = false;
  }
  else{
    numbersCheckBox.classList.add('active');
    numbersCheckBoxAnswer = true;
  }
  checkPasswordOptions();
})

symbolsCheckBox.addEventListener('click', () => {
  if(symbolsCheckBox.classList.contains('active')){
    symbolsCheckBox.classList.remove('active');
    symbolsCheckBoxAnswer = false;
  }
  else{
    symbolsCheckBox.classList.add('active');
    symbolsCheckBoxAnswer = true;
  }
  checkPasswordOptions();
})

rangeInput.addEventListener("input", updateBackground);
updateBackground();

rangeInput.addEventListener("input", updatePasswordLength);
updatePasswordLength();