const forms = () => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		phoneInputs = document.querySelectorAll('input[name="phone"]'),
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

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		});
		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
		upload.forEach(item => {
			item.previousElementSibling.textContent = message.noFile;
		});
	};

	upload.forEach(item => {
		item.addEventListener('input', () => {
			console.log(item.files[0]);
			let fileName;
			if (item.files[0].name.split('.')[0].length > 7) {
				fileName = `${item.files[0].name.substring(0,6)}...${item.files[0].name.split('.')[1]}`;
			} else {
				fileName = `${item.files[0].name}`;
			}
			console.group(item.previousElementSibling);
			item.previousElementSibling.textContent = fileName;
		});
	});

	phoneInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/[^0-9^+^\-^(^)]/, '');
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

			let api;

			switch (true) {
				case item.closest('.popup-design') !== null || item.classList.contains('form_calc'):
					api = path.designer;
					break;
				case item.closest('.popup-consultation') !== null:
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