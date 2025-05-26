const rangeInput = document.getElementById('inputRange');
const lengthPasswordSpan = document.getElementById('passwordLength');
const uppercaseCheckBox = document.getElementById('uppercaseCheckBox');
const lowerCheckBox = document.getElementById('lowerCheckBox');
const numbersCheckBox = document.getElementById('numbersCheckBox');
const symbolsCheckBox = document.getElementById('symbolsCheckBox');
const generatePasswordBtn = document.getElementById('generatePasswordBtn');
const generatePasswordWindow = document.getElementById('generatePassword');
let uppercaseCheckBoxAnswer = ''; 
let lowerCheckBoxAnswer = '';
let numbersCheckBoxAnswer = '';
let symbolsCheckBoxAnswer = '';
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symbols = "!@#$%^&*()_+=-`~[]\{}|;':\",./<>?";
let characterPool = '';
const copyBtn = document.getElementById('copyBtn');
const generateBtn = document.getElementById('generateBtn');
const generatePasswordText = document.getElementById('generatedPasswordText');
const generatedBoxWindow = document.getElementById('generatedPassword-box');

function updateBackground() {
  const value = rangeInput.value;
  const min = rangeInput.min;
  const max = rangeInput.max;
  const percent = ((value - min) / (max - min)) * 100;
  rangeInput.style.background = `linear-gradient(to right, #80ff00 ${percent}%, #ccc ${percent}%)`;
}

function updatePasswordLength(){
  lengthPasswordSpan.innerHTML = rangeInput.value;
}

function checkPasswordOptions(){
  characterPool = '';

  if(uppercaseCheckBoxAnswer){
    characterPool += upperLetters
  }
  else{
    characterPool = characterPool
      .split('')
      .filter(char => !upperLetters.includes(char))
      .join('');
  }
  if(lowerCheckBoxAnswer){
    characterPool += lowerLetters
  }
  else{
    characterPool = characterPool
      .split('')
      .filter(char => !lowerLetters.includes(char))
      .join('');
  }
  if(numbersCheckBoxAnswer){
    characterPool += numbers
  }
  else{
    characterPool = characterPool
      .split('')
      .filter(char => !numbers.includes(char))
      .join('');
  }
  if(symbolsCheckBoxAnswer){
    characterPool += symbols
  }
  else{
    characterPool = characterPool
      .split('')
      .filter(char => !symbols.includes(char))
      .join('');
  }
}

function generatePassword(characterPool){
  const passwordLengthNumber =  Number(rangeInput.value);
  let result = '';
  for(let i = 0; i < passwordLengthNumber; i++){
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    result += characterPool[randomIndex];
  }
  generatePasswordText.innerHTML = result;
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

generatePasswordBtn.addEventListener('click', (e) => {
  e.preventDefault();
  generatePassword(characterPool);
  generatePasswordWindow.classList.add('hidden');
  generatedBoxWindow.classList.remove('hidden');
})

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  generatedBoxWindow.classList.add('hidden');
})

copyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(generatePasswordText.innerHTML);
})

rangeInput.addEventListener("input", updateBackground);
updateBackground();

rangeInput.addEventListener("input", updatePasswordLength);
updatePasswordLength();