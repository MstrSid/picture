import spaceRemover from "../utils/spaceRemover";

const simpleLoad = (selector, hiddenSelector, showSelector) => {
	const trigger = document.querySelector(selector),
		hiddenItems = document.querySelectorAll(spaceRemover(hiddenSelector));
	trigger.addEventListener('click', event => {
		if (event.target) {
			event.preventDefault();
			hiddenItems.forEach(item => {
				item.classList.add('animated', 'fadeInUp');
				const hiddenSelectors = listSelectorsFormatter(spaceRemover(hiddenSelector));
				const showSelectors = listSelectorsFormatter(spaceRemover(showSelector));
				hiddenSelectors.forEach(selector => {
					item.classList.remove(selector);
				});
				showSelectors.forEach(selector => {
					item.classList.add(selector);
				});
				trigger.remove();
			});
		}
	});

	function listSelectorsFormatter(selectors) {
		return selectors.substring(1, selectors.length).split('.');
	}
};

export default simpleLoad;