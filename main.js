let moveNoButtonInterval;

function startMovingNoButton() {
  moveNoButtonInterval = setInterval(moveNoButton, 100);
}

function stopMovingNoButton() {
  clearInterval(moveNoButtonInterval);
}

function moveNoButton() {
  const noButton = document.getElementById('no-button');
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  console.log(`y = ${randomY} and x = ${randomX}`)

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}


function showMessage(message) {
  alert(message);
}
