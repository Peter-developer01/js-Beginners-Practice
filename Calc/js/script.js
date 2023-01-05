/* let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
	let request = new XMLHttpRequest();

	// request.open(method, url, async, login, pass);
	request.open("GET", "js/current.json");
	request.setRequestHeader('Content-type', 'application-json; charset=utf-8');
	request.send();

	// status
	// statusText
	// responseText / response
	// readyState

	request.addEventListener('readystatechange', function() {
		if(request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);

			inputUsd.value = inputRub.value / data.usd;
		} else {
			inputUsd.value = 'Что-то пошло не так!';
		}
	});

}); */

/* WITH PROMISE */
let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

	function catchData () {

		return new Promise(function (resolve, reject) {
			let request = new XMLHttpRequest();
			request.open("GET", "js/current.json");

			request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
			request.send();

			request.onload = function () {
				if (request.readyState === 4) {
					if (request.status == 200) {
						resolve(this.response);
					} else {
						reject();

					}
				}
			};
		});
	}

	catchData().then(response => {
		// console.log(response);
		let data = JSON.parse(response);
		inputUsd.value = (inputRub.value / data.usd).toFixed(2);
	})
		.catch(() => inputUsd.value = "Что-то пошло не так");


});







let inputNumberFirst = document.getElementById('numberOne'),
	inputNumberSecond = document.getElementById('numberTwo'),
	inputResult = document.getElementById('result');

inputNumberFirst.addEventListener('input', () => {
	let request = new XMLHttpRequest();

	// request.open(method, url, async, login, pass);
	request.open("GET", "js/current.json");
	request.setRequestHeader('Content-type', 'application-json; charset=utf-8');
	request.send();

	// status
	// statusText
	// responseText / response
	// readyState

	request.addEventListener('readystatechange', function () {
		if (request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);
			let num1 = +inputNumberFirst.value;
			let num2 = +inputNumberFirst.value;
			let calcValue = num1 + num2;

			inputResult.placeholder = 'Результат: ' + calcValue;
		} else {
			inputResult.placeholder = 'Что-то пошло не так!';
		}
	});
});