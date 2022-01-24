import spaceRemover from "../utils/spaceRemover";
import {
	getData
} from "../services/requests";

const simpleLoad = (triggerselector, parentSelector, showSelector /* hiddenSelector, */ ) => {
	const trigger = document.querySelector(triggerselector);
	// hiddenItems = document.querySelectorAll(spaceRemover(hiddenSelector));
	// trigger.addEventListener('click', event => {
	// 	if (event.target) {
	// 		event.preventDefault();
	// 		hiddenItems.forEach(item => {
	// 			item.classList.add('animated', 'fadeInUp');
	// 			const hiddenSelectors = listSelectorsFormatter(spaceRemover(hiddenSelector));
	// 			const showSelectors = listSelectorsFormatter(spaceRemover(showSelector));
	// 			hiddenSelectors.forEach(selector => {
	// 				item.classList.remove(selector);
	// 			});
	// 			showSelectors.forEach(selector => {
	// 				item.classList.add(selector);
	// 			});
	// 			trigger.remove();
	// 		});
	// 	}
	// });

	trigger.addEventListener('click', function () {
		getData('assets/db.json')
			.then(res => createCard(res.styles))
			.then(this.remove())
			.catch(error => console.log(error));
	});

	function createCard(response) {
		response.forEach(({
			src,
			title,
			link
		}) => {
			const card = document.createElement('div');
			const showSelectors = listSelectorsFormatter(spaceRemover(showSelector));
			showSelectors.forEach(selector => {
				card.classList.add(selector);
			});
			card.innerHTML = `
			<div class="styles-block">
						<img src=${src} alt="">
						<h4>${title}</h4>
						<a href=${link}>Подробнее</a>
					</div>`;
			document.querySelector(parentSelector).appendChild(card);
		});
	}

	function listSelectorsFormatter(selectors) {
		return selectors.substring(1, selectors.length).split('.');
	}
};

export default simpleLoad;