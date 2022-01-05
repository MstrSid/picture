import {
	getData
} from "../services/requests";


const calculator = async (size, material, options, promocode, result) => {
	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(options),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);

	let sum = 0;
	let promo = 0;
	let responseSizes, responseMaterial, responseOptions, responsePromos;

	let response = await getData('assets/db.json');

	responseSizes = response.size;
	responseMaterial = response.material;
	responseOptions = response.options;
	responsePromos = response.promos;

	const calcFunc = () => {
		sum = Math.round((responseSizes[sizeBlock.value] || 0) * (responseMaterial[materialBlock.value] || 0) + (responseOptions[optionsBlock.value] || 0));
		for (let key in responsePromos) {
			if (key === promocodeBlock.value.trim()) {
				promo = +responsePromos[key];
				break;
			} else {
				promo = 0;
			}
		}
		if (sizeBlock.value == '' || materialBlock.value == '') {
			resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
		} else if (promo > 0) {
			resultBlock.textContent = Math.round(sum - (sum * promo));
		} else {
			resultBlock.textContent = sum;
		}
	};

	sizeBlock.addEventListener('change', calcFunc);
	materialBlock.addEventListener('change', calcFunc);
	optionsBlock.addEventListener('change', calcFunc);
	promocodeBlock.addEventListener('input', calcFunc);
};

/* 
TODO: make send information from calculator
*/ 

export default calculator;