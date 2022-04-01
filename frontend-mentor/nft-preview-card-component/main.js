let popupCloseBtn = document.getElementById('popup-close');
popupCloseBtn.addEventListener('click', togglePopup);

let cardViewBtn = document.querySelector('.card__btn-view');
cardViewBtn.addEventListener('click', togglePopup);

function togglePopup() {
  let cardPopupElement = document.querySelector('.card__popup');
  cardPopupElement.classList.toggle('display--flex');
}