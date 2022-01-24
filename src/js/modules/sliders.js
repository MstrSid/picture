const sliders = (sliderSelector, prev, next, direction = 'horizontal') => {
	let slideIndex = 0,
		paused = false;
	const items = document.querySelectorAll(sliderSelector);

	function showSlides(index) {
		if (index > items.length - 1) {
			index = 0;
		}
		if (index < 0) {
			index = items.length - 1;
		}

		items.forEach(item => {
			item.classList.add('animated');
			item.style.display = 'none';
		});

		items[index].style.display = 'block';
		return index;
	}

	slideIndex = showSlides(slideIndex);

	function changeSlide(n) {
		slideIndex = showSlides(slideIndex += n);
	}

	function activateAnimation() {
		if (direction === 'vertical') {
			paused = setInterval(() => {
				changeSlide(1);
				items[slideIndex].classList.add('slideInDown');
			}, 5000);
		} else {
			paused = setInterval(() => {
				changeSlide(1);
				items[slideIndex].classList.remove('slideInLeft');
				items[slideIndex].classList.add('slideInRight');
			}, 5000);
		}
	}

	try {
		const prevBtn = document.querySelector(prev),
			nextBtn = document.querySelector(next);

		prevBtn.addEventListener('click', () => {
			changeSlide(-1);
			items[slideIndex].classList.remove('slideInRight');
			items[slideIndex].classList.add('slideInLeft');
		});
		nextBtn.addEventListener('click', () => {
			changeSlide(1);
			items[slideIndex].classList.remove('slideInLeft');
			items[slideIndex].classList.add('slideInRight');
		});
	} catch (e) {}

	items[0].parentNode.addEventListener('mouseenter', () => {
		clearTimeout(paused);
	});
	items[0].parentNode.addEventListener('mouseleave', () => {
		activateAnimation();
	});

	activateAnimation();
};

export default sliders;