const tabs = (tabsSelector, dataSelector, noDataSelector) => {
	const tabs = document.querySelectorAll(tabsSelector),
		photos = document.querySelectorAll(dataSelector),
		noData = document.querySelector(noDataSelector);
	let count = 0;

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			count = 0;
			noData.style.display = 'none';
			tabs.forEach(item => {
				item.classList.remove('animated', 'fadeIn');
				item.classList.remove('active');
			});
			tab.classList.add('active');
			tab.classList.add('animated', 'fadeIn');

			photos.forEach(block => {
				block.style.display = 'none';
				block.classList.remove('animated', 'fadeIn');
				block.classList.forEach(blockClassItem => {
					tab.classList.forEach(tabClassItem => {
						if (blockClassItem === tabClassItem) {
							count++;
							block.classList.add('animated', 'fadeIn');
							block.style.display = 'block';
						}
						console.log(count);
					});
				});
			});
			if (count == 0) {
				noData.style.display = 'block';
			}
		});
	});
};

export default tabs;