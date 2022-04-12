document.querySelector('button').addEventListener('click', (event) => {
	event.preventDefault();
	let $emailInput = document.querySelector('input');
	let $formFeedback = document.querySelector('.feedback p');
	let $formErrorImg = document.querySelector('.form__error-img');
	let $formSuccess = document.querySelector('.form__success');

	if (validateEmail($emailInput.value)) {
		$formFeedback.classList.add('feedback--hidden');
		$formErrorImg.classList.add('form__error-img--hidden');
		$emailInput.parentElement.style.display = 'none';
		$formSuccess.style.display = 'flex';
	} else {
		$formFeedback.classList.remove('feedback--hidden');
		$formErrorImg.classList.remove('form__error-img--hidden');
	}
});

function validateEmail(email) {
	if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,12})+$/)) return false;
	return true;
}
