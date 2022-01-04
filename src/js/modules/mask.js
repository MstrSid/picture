const mask = (selector) => {

	let setCursorPosition = (pos, elem) => {
		elem.addEventListener('click', () => {
			if (elem.setSelectionRange.length > 0) {
				elem.setSelectionRange(pos, pos);
			} else {
				if (elem.createTextRange.length > 0) {
					let range = elem.createTextRange();
					range.collapse(true);
					range.moveStart('character', pos);
					range.moveEnd('character', pos);
					range.select();
				}
			}
		});
	};

	function doMask(event) {
		let matrix = '+375 (__) ___ __ __',
			iterator = 0,
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, '');

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, item => {
			return /[_\d]/.test(item) && iterator < val.length ? val.charAt(iterator++) : iterator >= val.length ? '' : item;
		});

		if (event.type == 'blur') {
			if (this.value.length === 4) {
				this.value = '';
			}
		}
		setCursorPosition(this.value.length, this);
	}

	let inputs = document.querySelectorAll(selector);
	inputs.forEach(input => {
		input.addEventListener('input', doMask);
		input.addEventListener('focus', doMask);
		input.addEventListener('blur', doMask);
	});
};

export default mask;