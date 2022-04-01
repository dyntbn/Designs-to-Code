let detailElements = document.querySelectorAll('.card__detail');
detailElements[1].open = true; // Optional. Used to match open element state in design mockup.

document.querySelectorAll('.card__summary').forEach((element) => {
  element.addEventListener('click', limitOpenDetails);
})

// Limits a set of details-elements to only allow 1 element to be open and closed.
function limitOpenDetails() {
  for (detail of detailElements) {
    if (detail.firstElementChild == this) {
      this.open = false;
    } else {
      detail.open = false;
    }
  }
}