import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkLangInput from './modules/checkLangInput';
import simpleLoad from './modules/simpleLoad';
import calculator from './modules/calculator';
import tabs from './modules/tabs';

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
});