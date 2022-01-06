const accordeon = (clickElementSelector, showElementSelector) => {
	const clickElements = document.querySelectorAll(clickElementSelector),
		showElements = document.querySelectorAll(showElementSelector);

	showElements.forEach(item => {
		item.style.display = 'none';
	});

	clickElements.forEach((element, i) => {
		element.addEventListener('click', function () {
			this.classList.toggle('ui-accordion-header-active');
			if (showElements[i].style.display === 'none') {
				showElements[i].classList.remove('animated', 'fadeOut');
				showElements[i].classList.add('animated', 'fadeIn');
				showElements[i].style.display = 'block';
			} else {
				showElements[i].classList.remove('animated', 'fadeIn');
				showElements[i].classList.add('animated', 'fadeOut');
				setTimeout(() => {
					showElements[i].style.display = 'none';
				}, 500);


			}

		});
	});
};

export default accordeon;