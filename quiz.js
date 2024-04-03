const data = [
  {
    id: 1,
    question: "what is the capital of india",
    answers: [
      { answer: "mumbai", isCorrect: false },
      { answer: "Delhi", isCorrect: true },
      { answer: "Banglaru", isCorrect: false },
      { answer: "Indore", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "which is the clenest city of india",
    answers: [
      { answer: "mumbai", isCorrect: false },
      { answer: "Delhi", isCorrect: false },
      { answer: "Indore", isCorrect: true },
      { answer: "Banglaru", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "in which city have most traffic",
    answers: [
      { answer: "Banglaru", isCorrect: true },
      { answer: "mumbai", isCorrect: false },
      { answer: "Delhi", isCorrect: false },
      { answer: "Indore", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const questionContainer = document.querySelector(".question");
const answerContainer = document.querySelector(".Answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");
const radio = document.querySelectorAll(".radio");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const showQuestion = (qNumber) => {
  selectedAnswer = null;
  questionContainer.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `<div class="answer">
    <input class="radio" type="radio" id=${index} name="answer" value=${item.isCorrect} />
    <label for=${index}>${item.answer}</label>
  </div>`
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};
const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      qIndex === data.length ? resultShow() : showQuestion(qIndex);
    } else alert("please select an answers");
  });
};

const playAgainGame = () => {
  play.addEventListener("click", () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    showQuestion(qIndex);
  });
};
const resultShow = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Total Score ${
    correctCount * 10 - wrongCount * 10
  }`;
};

playAgainGame();
submitAnswer();
showQuestion(qIndex);
