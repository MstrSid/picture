const checkLangInput = (selector) => {
	const inputs = document.querySelectorAll(selector);
	inputs.forEach(input => {
		input.addEventListener('keypress', event => {
			if (event.key.match(/[^а-яё 0-9]/ig)) {
				event.preventDefault();
			}
		});
		input.addEventListener('input', (event) => {
			if (event.inputType === 'insertFromPaste') {
				event.target.value = event.target.value.replace(/[^а-яё 0-9]/ig, '');
			}
		});
	});
};

export default checkLangInput;