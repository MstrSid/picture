const modals = () => {
	let timerId;
	let btnPressed;
	const scroll = calcScroll();

	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			gift = document.querySelector('.fixed-gift');

			gift.classList.add('animated');

		trigger.forEach(item => {
			item.addEventListener('click', (event) => {
				if (event.target) {
					event.preventDefault();
				}
				windows.forEach(item => {
					item.style.display = 'none';
					item.classList.add('animated', 'fadeIn');
				});

				btnPressed = true;

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
				gift.style.marginRight = `${scroll}px`;
				clearTimeout(timerId);
				if (destroy) {
					item.remove();
				}
			});
		});

		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none';
			});
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
			gift.style.marginRight = `0px`;
		});

		modal.addEventListener('click', (event) => {
			if (event.target === modal) {
				windows.forEach(item => {
					item.style.display = 'none';
				});
				modal.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.marginRight = `0px`;
				gift.style.marginRight = `0px`;
			}
		});
	}

	function calcScroll() {
		let div = document.createElement('div');
		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	}

	function openByScroll(selector) {
		window.addEventListener('scroll', () => {
			let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
			if (!btnPressed && (window.scrollY + document.documentElement.clientHeight >= scrollHeight)) {
				document.querySelector(selector).click();
				window.scrollBy(0, -1);
			}
		});
	}

	function showModalByTime(selector, time) {
		timerId = setTimeout(function () {
			let display;

			document.querySelectorAll('[data-modal]').forEach(item => {
				if (getComputedStyle(item).display !== 'none') {
					display = "block";
				}
			});

			if (!display) {
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scroll}px`;
				document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;
			}
		}, time);
		return timerId;
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

	openByScroll('.fixed-gift');

	showModalByTime('.popup-consultation', 60000);
};

export default modals;