const btnEl = document.querySelector("button");
const feedbackEl = document.querySelector(".feedback");
const form = document.querySelector("form");
const correcttAnswer = 4;

const checkAnswer = (answer) => {
	correcttAnswer === answer
		? (feedbackEl.textContent = "Correct! Well done.")
		: (feedbackEl.textContent = "That's incorrect. Try again!");
};

btnEl.addEventListener("click", (e) => {
	const userAnswer = new FormData(form).get("answer");
	checkAnswer(Number(userAnswer));
	e.preventDefault();
});
