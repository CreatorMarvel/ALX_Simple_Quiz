const btnEl = document.getElementById("submit-answer");
const feedbackEl = document.querySelector("#feedback");

const checkAnswer = () => {
	const correctAnswer = 4;
	const radios = document.getElementsByName("quiz");
	let userAnswer;

	for (const radio of radios) {
		if (radio.checked) {
			userAnswer = radio.value;
			break;
		}
	}

	if (correctAnswer === Number(userAnswer)) {
		feedbackEl.textContent = "Correct! Well done.";
	} else {
		feedbackEl.textContent = "That's incorrect. Try again!";
	}
};

btnEl.addEventListener("click", checkAnswer);
