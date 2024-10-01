const btnsEl = document.querySelectorAll("button");
const calculationResultsEl = document.getElementById("calculation-result");
let result = 0;

btnsEl.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const number1 = parseFloat(document.getElementById("number1").value) || 0;
		const number2 = parseFloat(document.getElementById("number2").value) || 0;
		const btnsId = e.target.id;

		switch (btnsId) {
			case "add":
				result = add(number1, number2);
				break;
			case "devide":
				result = devide(number1, number2);
				break;
			case "multiply":
				result = multiply(number1, number2);
				break;
			case "subtract":
				result = substract(number1, number2);
				break;
			default:
				result = 0;
				break;
		}
		calculationResultsEl.textContent = result;
	});
});

function add(number1, number2) {
	return number1 + number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function substract(number1, number2) {
	return number1 - number2;
}

function devide(number1, number2) {
	return number1 / number2;
}
