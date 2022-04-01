document.body.querySelector('.card__btn').addEventListener('click', () => {
	var ratingValue = document.body.querySelectorAll('.card__radio:checked');

	// Prevent scene change if document data isn't correct or present
	if (ratingValue == null || ratingValue == undefined || ratingValue.length == 0) {
		showErrorFeedback('No Rating Selected');
		return;
	}
	if (ratingValue[0].value > 5 || ratingValue[0].value < 0) {
		showErrorFeedback('Rating Out of Bounds');
		return;
	}

	// Hide rating card then display submitted rated card.
	document.body.querySelector('.card__feedback span').textContent = ratingValue[0].value;
	let ratedScene = document.body.querySelector('.card--inactive');
	ratedScene.classList.remove('card--inactive');
	ratedScene.classList.add('card--fade-in');
	document.body.querySelector('.card').classList.add('card--inactive');
});

// Handle SPACEBAR as CLICK when using TAB-based selection
document.body.querySelectorAll('.card__label').forEach((element) => {
	element.addEventListener('keyup', (event) => {
		if (event.which == '32') {
			event.target.click(); // CLICK current selection
		}
	});
});

function showErrorFeedback(message, duration = 2000) {
	// Present error to user
	let submitElement = document.querySelector('.card__btn');
	let isFocus = document.activeElement;
	submitElement.disabled = true;
	submitElement.classList.add('card__btn--shake');
	submitElement.textContent = message;

	// Enable new submission
	setTimeout(() => {
		submitElement.disabled = false;
		submitElement.textContent = 'Submit';
		submitElement.classList.remove('card__btn--shake');
		if (isFocus) submitElement.focus();
	}, duration);
	return;
}
