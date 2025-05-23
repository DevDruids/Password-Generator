const rangeInput = document.getElementById('inputRange');

function updateBackground() {
  const value = rangeInput.value;
  const min = rangeInput.min;
  const max = rangeInput.max;
  const percent = ((value - min) / (max - min)) * 100;
  rangeInput.style.background = `linear-gradient(to right, #80ff00 ${percent}%, #ccc ${percent}%)`;
}

rangeInput.addEventListener("input", updateBackground);
updateBackground();