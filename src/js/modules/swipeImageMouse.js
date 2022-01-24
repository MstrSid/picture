const swipeImageMouse = (selector, imageFileExt) => {
	const sizeBlock = document.querySelectorAll(selector);

	sizeBlock.forEach(block => {
		const image = block.querySelector('img'),
		 srcOriginal = image.getAttribute('src');
		block.addEventListener('mouseenter', function () {
			image.classList.add('animated', 'fadeIn');
			image.setAttribute('src', `${srcOriginal.replace(imageFileExt, '')}-1.png`);
		});

		block.addEventListener('mouseleave', function () {
			image.setAttribute('src', srcOriginal);
			image.classList.remove('animated', 'fadeIn');
		});
	});
};

export default swipeImageMouse;