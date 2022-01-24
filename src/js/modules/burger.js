const burger = (selectorBurger, selectorSubMenu) => {
	const burgerItem = document.querySelector(selectorBurger),
		subMenu = document.querySelector(selectorSubMenu);
	let timeout = false;
	window.addEventListener('resize', function () {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			if (window.screen.availWidth > 991) {
				subMenu.style.display = 'none';
			}
		}, 75);
	});
	burgerItem.addEventListener('click', () => {
		if (window.screen.availWidth <= 991) {
			if (getComputedStyle(subMenu).display === 'none') {
				subMenu.style.display = 'block';
			} else {
				subMenu.style.display = 'none';
			}
		}
	});
};

export default burger;