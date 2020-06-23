var startBtn = $("#startbtn")
var btnA = $("#answer1")
var btnB = $("#answer2")
var btnC = $("#answer3")
var btnD = $("#answer4")
var display = $("#timeLeft")
var questionBoxElement = $("#questionBox")
var answersButtonElement = $("span")
var score = 0;
var currentQuestionIndex, shuffledQuestions;
var startTime = 60 * 3

   

   // here are the event handlers
  startBtn.on("click", startQuiz)
  btnA.on("click", checkAnswer )
  btnB.on("click", checkAnswer )
  btnC.on("click", checkAnswer )
  btnD.on("click", checkAnswer )



  // here is the timer function
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

  
  // start quiz function 
  function startQuiz() {
    $( "#title" ).fadeOut(700);
    $( "#firstQuestion" ).delay(800).fadeIn(800);
    var display = $("#timeLeft")
    startTimer(startTime, display  );
   shuffledQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0;
    setNextQuestion();
    
   
    
  
  };

  function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    showAnswers(shuffledQuestions[currentQuestionIndex]);
    
  };


  
 var questions = [
   {
     question: "What is Charlie's Job?",
     answers: [
       {text: 'Janitor', correct: true },
       {text: 'Gym Teacher', correct: false },
       {text: 'Construction Worker', correct: false },
       {text: 'Bar Tender', correct: false }
     ]
   },
   {
    question: 'What is the name of the bar Charlie works at?',
    answers: [
      {text: 'Buddies', correct: false },
      {text: 'Paddys Pub', correct: true },
      {text: 'The Fun House', correct: false },
      {text: 'Reggies', correct: false }
    ] 
  }, 
 ]
  function showQuestion(question){
    questionBoxElement.text(question.question)
    
    
  }
  
  
  
  function showAnswers(){
  //for (i = 0; i < 4; i++){
    btnA.text(this.questions[currentQuestionIndex].answers[0].text)
    btnB.text(this.questions[currentQuestionIndex].answers[1].text)
    btnC.text(this.questions[currentQuestionIndex].answers[2].text)
    btnD.text(this.questions[currentQuestionIndex].answers[3].text)
    //console.log(this.questions[currentQuestionIndex].answers[i].text)
  //}
  
    
  }
  
  function checkAnswer(question){
    
    
    
   
   
  
  

  }; 
    
    
   

  