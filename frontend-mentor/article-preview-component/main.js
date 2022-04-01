const popUpShareElement = document.querySelector('.popup-share');
const cardShareBtnElement = document.querySelector('.card__btn');

cardShareBtnElement.addEventListener('click', toggleDisplay);

function toggleDisplay() {
  popUpShareElement.classList.toggle('popup--hidden');
  cardShareBtnElement.classList.toggle('share-btn--active');
}