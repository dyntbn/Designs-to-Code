const shareElement = document.querySelector('.share');
const cardShareElement = document.querySelector('.card__share');

cardShareElement.addEventListener('click', toggleDisplay);

function toggleDisplay() {
  shareElement.classList.toggle('share--inactive');
}