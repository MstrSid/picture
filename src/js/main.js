import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkLangInput from './modules/checkLangInput';
import simpleLoad from './modules/simpleLoad';
import calculator from './modules/calculator';
import tabs from './modules/tabs';
import swipeImageMouse from './modules/swipeImageMouse';
import accordeon from './modules/accordeon';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const state = {};
	modals();
	sliders('.main-slider-item', undefined, undefined, 'vertical');
	sliders('.feedback-slider-item', '.main-prev-btn', '.main-next-btn');
	forms(state);
	mask('[name="phone"]');
	checkLangInput('[name="name"]');
	checkLangInput('[name="message"]');
	// simpleLoad('.button-styles',
	// 	'.hidden-lg .hidden-md .hidden-sm .hidden-xs .styles-2',
	// 	'.col-sm-3 .col-sm-offset-0 .col-xs-10 .col-xs-offset-1');
	simpleLoad('.button-styles',
		'#styles .row',
		'.animated .fadeInUp .col-sm-3 .col-sm-offset-0 .col-xs-10 .col-xs-offset-1');
	calculator('#size', '#material', '#options', '.promocode', '.calc-price', state);
	tabs('.portfolio-menu > li', '.portfolio-block', '.portfolio-no');
	swipeImageMouse('.sizes .sizes-block', '.png');
	accordeon('#accordion .accordion-heading', '#accordion .accordion-block');
	burger('.burger', '.header .burger-menu');
	scrolling('.pageup', true);
	scrolling('.header-menu-sub a');
	drop();
});