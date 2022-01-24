const drop = () => {
	const fileInputs = document.querySelectorAll('[name="upload"]');
	["dragenter", "dragleave", "dragover", "drop"].forEach(eventName => {
		fileInputs.forEach(element => {
			element.addEventListener(eventName, preventDefaults, false);
		});
	});

	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	function highlight(selector) {
		selector.closest('.file_upload').style.border = '2px solid yellow';
	}

	function unHighlight(selector) {
		selector.closest('.file_upload').style.border = 'none';
	}

	["dragenter", "dragover"].forEach(eventName => {
		fileInputs.forEach(element => {
			element.addEventListener(eventName, () => highlight(element), false);
		});
	});

	["dragleave", "drop"].forEach(eventName => {
		fileInputs.forEach(element => {
			element.addEventListener(eventName, () => unHighlight(element), false);
		});
	});

	fileInputs.forEach(item => {
		item.addEventListener('drop', e => {
			item.files = e.dataTransfer.files;
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
			if (item.closest('main')) {
 
                const formData = new FormData();
                formData.append('file', item.files[0]);
                
                const postData = async (url, data) => {
                    let res = await fetch(url, {
                        method: "POST",
                        body: data
                    });
                    return await res.text();
                };
 
                postData('assets/server.php', formData)
                    .then(res => console.log(res))
                    .catch(() => console.log('Ошибка'));
            }
		});
	});

};

export default drop;