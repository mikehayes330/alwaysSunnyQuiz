var startBtn = $("#startbtn");
var btnA = $("#answer1");
var btnB = $("#answer2");
var btnC = $("#answer3");
var btnD = $("#answer4");
var display = $("#timeLeft");
var questionBoxElement = $("#questionBox");
var answersButtonElement = $("span");
var score = 0;
var currentQuestionIndex = 0;
var shuffledQuestions;
var startTime = 60 * 3;
var scoreElement = $("#score");

// here are the event handlers
startBtn.on("click", startQuiz);
btnA.on("click", checkAnswer);
btnB.on("click", checkAnswer);
btnC.on("click", checkAnswer);
btnD.on("click", checkAnswer);

// start quiz function
function startQuiz() {
  $("#title").fadeOut(700);
  $("#firstQuestion").delay(800).fadeIn(800);
  var display = $("#timeLeft");
  startTimer(startTime, display);
  setNextQuestion();
}

function checkAnswer() {
  if (this.innerText === questions[currentQuestionIndex].answer) {
    // trying to change color on correct
    // $("body").addClass("correct");
    $(".container").fadeOut(400).fadeIn(800);
    currentQuestionIndex++;
    alert("CORRECT!!");
    setNextQuestion();
    score++;
  } else {
    // $('body').addClass('wrong');
    $(".container").fadeOut(400).fadeIn(800);
    currentQuestionIndex++;
    setNextQuestion();
    alert("WRONG!!");
    score--;
  }
}

function setNextQuestion() {
  showQuestion();
  showAnswers();
  displayScore();
}

var questions = [
  {
    title: "What is Charlie's Job?",
    choices: ["Janitor", "Gym Teacher", "Construction Worker", "Bar Tender"],
    answer: "Janitor",
  },
  {
    title: "What is the name of the bar Charlie works at?",
    choices: ["Buddies", "Paddys Pub", "The Fun House", "The Fun House"],
    answer: "Paddys Pub",
  },
  {
    title: 'In the episode "Charly Work", what does Charly save the bar from?',
    choices: [
      "A bad health inspection",
      "a gang of kids",
      "being sold for condos",
      "an employee stealing",
    ],
    answer: "A bad health inspection",
  },
  {
    title: "Who is Charlies roomate?",
    choices: ["Ted", "Frank", "The Bird", "Dennis"],
    answer: "Frank",
  },
  {
    title: "What is Charlies invention for kittens?",
    choices: [
      "Kitten Sushi Bar",
      "Kitten Dating Site",
      "Kitten Dubstep Music",
      "Kitten Mittens",
    ],
    answer: "Kitten Mittens",
  },
];

console.log(questions.length);

function showQuestion() {
  questionBoxElement.text(questions[currentQuestionIndex].title);
}

function showAnswers() {
  //for (i = 0; i < 4; i++){
  btnA.text(questions[currentQuestionIndex].choices[0]);
  btnB.text(questions[currentQuestionIndex].choices[1]);
  btnC.text(questions[currentQuestionIndex].choices[2]);
  btnD.text(questions[currentQuestionIndex].choices[3]);
  //console.log(this.questions[currentQuestionIndex].answers[i].text)
  //}
}
// here is the timer function
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);
    displayScore();
    console.log(currentQuestionIndex);
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function quizEnd() {
  if (currentQuestionIndex === questions.length) {
    alert("quiz is over");
  }
}
console.log(questions.length);

function displayScore() {
  scoreElement.text(score);
}
