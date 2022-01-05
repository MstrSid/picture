import { postData } from "../services/requests";

const forms = (state) => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		selects = document.querySelectorAll('select'),
		upload = document.querySelectorAll('[name="upload"]');

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо, скоро менеджер свяжется с Вами!',
		failure: 'Что-то пошло не так...',
		spinner: 'assets/img/spinner.gif',
		okay: 'assets/img/ok.png',
		fail: 'assets/img/fail.png',
		noFile: 'Файл не выбран',
	};

	const path = {
		designer: 'assets/server.php',
		question: 'assets/question.php',
	};

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
		selects.forEach(item => {
			item.selectedIndex = 0;
		});
		upload.forEach(item => {
			item.previousElementSibling.textContent = message.noFile;
		});
	};

	upload.forEach(item => {
		item.addEventListener('input', () => {
			let fileName;
			const lastIndexDot = item.files[0].name.lastIndexOf('.');
			const extension = item.files[0].name.substring(lastIndexDot, item.files[0].name.length);

			console.log(lastIndexDot);
			console.log(extension);

			if (item.files[0].name.substring(0, lastIndexDot).length > 7) {
				fileName = `${item.files[0].name.substring(0,6)}...${extension}`;
			} else {
				fileName = `${item.files[0].name}`;
			}

			console.group(fileName);

			item.previousElementSibling.textContent = fileName;
		});
	});

	form.forEach(item => {
		item.addEventListener('submit', (event) => {
			event.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.parentNode.appendChild(statusMessage);

			item.classList.add('animated', 'fadeOutUp');
			setTimeout(() => {
				item.style.display = 'none';
			}, 400);

			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', message.spinner);
			statusImg.classList.add('animated', 'fadeInUp');
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			const formData = new FormData(item);
			
			if (item.classList.contains('form_calc')) { 
                for (let key in state) { 
                    formData.append(key, state[key]); 
                }
			}

			let api;

			switch (true) {
				case item.closest('.popup-design') !== null || item.classList.contains('form_calc'):
					api = path.designer;
					break;
				case item.closest('.popup-consultation') !== null || item.classList.contains('form_consultation-main'):
					api = path.question;
					break;
			}

			console.log(api);

			postData(api, formData)
				.then(res => {
					console.log(res);
					statusImg.setAttribute('src', message.okay);
					textMessage.textContent = message.success;
				}).catch(() => {
					statusImg.setAttribute('src', message.fail);
					textMessage.textContent = message.failure;
				}).finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						item.style.display = 'block';
						item.classList.remove('fadeOutUp');
						item.classList.add('fadeInUp');
					}, 5000);
				});
		});
	});
};

export default forms;