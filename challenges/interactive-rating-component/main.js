document.body.querySelector('.card__btn').addEventListener('click', () => {
	var ratingValue = document.body.querySelectorAll('.card__radio:checked');

	// Prevent scene change if document data isn't correct or present
	if (
		ratingValue == null ||
		ratingValue == undefined ||
		ratingValue.length == 0 ||
		ratingValue[0].value > 5 ||
		ratingValue[0].value < 0
	)
		return;

	// Hide rating card and display submitted rated card.
	document.body.querySelector('.card__feedback span').textContent = ratingValue[0].value;
	document.body.querySelector('.card--inactive').classList.remove('card--inactive');
	document.body.querySelector('.card').classList.add('card--inactive');
});
