const btnEl = document.getElementById("submit-answer");
const feedbackEl = document.getElementById("feedback");

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

	correctAnswer == userAnswer
		? (feedbackEl.textContent = "Correct! Well done.")
		: (feedbackEl.textContent = "That's incorrect. Try again!");
};

btnEl.addEventListener("click", checkAnswer);
