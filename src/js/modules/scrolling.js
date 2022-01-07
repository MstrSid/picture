const scrolling = (upSelector, needOpaticy = false) => {
	const buttons = document.querySelectorAll(upSelector);
	buttons.forEach(button => {
		if (needOpaticy === true) {
			window.addEventListener('scroll', () => {
				if (document.documentElement.scrollTop > 1650) {
					button.style.opacity = 1;
				} else {
					button.style.opacity = 0;
				}

			});
		}
		const element = document.documentElement,
			body = document.body;

		const calcScroll = () => {
			button.addEventListener('click', function (event) {
				let scrollFromTop = Math.round(body.scrollTop || element.scrollTop);

				if (this.hash !== "") {
					event.preventDefault();
					let hashElement = document.querySelector(this.hash),
						hashElementTop = 0;

					while (hashElement.offsetParent) {
						hashElementTop += hashElement.offsetTop;
						hashElement = hashElement.offsetParent;
					}

					hashElementTop = Math.round(hashElementTop);
					smoothScroll(scrollFromTop, hashElementTop, this.hash);
				}
			});
		};

		const smoothScroll = (from, to, hash) => {
			let timeInterval = 1,
				prevScrollTop,
				speed;

			if (to > from) {
				speed = 30;
			} else {
				speed = -30;
			}

			let move = setInterval(function () {
				let scrollFromTop = Math.round(body.scrollTop || element.scrollTop);
				if (prevScrollTop === scrollFromTop ||
					(to > from && scrollFromTop >= to) ||
					(to < from && scrollFromTop <= to)) {
					clearInterval(move);
					history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
				} else {
					body.scrollTop += speed;
					element.scrollTop += speed;
					prevScrollTop = scrollFromTop;
				}
			}, timeInterval);
		};
		calcScroll();
	});


};

export default scrolling;