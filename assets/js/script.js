var startQuiz = document.querySelector("#startBtn");
var timeTracker = document.querySelector("#timeT");
var introPage = document.querySelector("#intro");
var firstQuestion = document.querySelector("#question1");
var question1Answer = document.querySelector("#one3");
var question1Answers = document.querySelector("#one1");
var secondQuestion = document.querySelector("#question2");
var thirdQuestion = document.querySelector("#question3");
var fourthQuestion = document.querySelector("#question4");
var fifthQuestion = document.querySelector("#question5");
var showResults = document.querySelector("#results");
var answerReveal = document.querySelector("#correctness");
var finalScore = document.querySelector("#score");
var initialsInput = document.querySelector("#initials").value;
var displayInitialScore = document.querySelector("#initialScore");
var correctAnswers = 0;
var totalPoints = (correctAnswers * 5);
var secondsLeft = 31;

//when start button is clicked, timer starts and question is presented
startQuiz.addEventListener("click", function() {
  
    function setTime() {
    var timerInterval = setInterval(function() {
     
      secondsLeft--;
      timeTracker.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        }

    }, 1000);
  }

    introPage.style.display = "none";
    firstQuestion.style.display = "block";
    setTime();
  
});

  //when answer button is clicked, another question is presented
    question1Answer.addEventListener("click", function() {
      firstQuestion.style.display = "none";
      secondQuestion.style.display = "block";
      //correct or wrong is displayed at the bottom once answer is inputed
      
      answerReveal.style.display = "block";
      answerReveal.innerHTML = "Correct!";
      
      correctAnswers++;
      
      setTimeout (function (){
        answerReveal.style.display = "none";
        answerReveal.textContent = "";
      },2000);
    });

    //when answer is incorrect, subtract time from the clock
    question1Answers.addEventListener("click", function() {
      firstQuestion.style.display = "none";
      secondQuestion.style.display = "block";
      //subtract time from timer
    });

  //End game once all questions are answered OR the timer reaches 0

  //Display results once game is over
    //score is displayed and they can enter their initials and submit
  
localStorage.setItem("total", totalPoints);

    var initialScore = localStorage.getItem("total");
    displayInitialScore.textContent = initialScore;

  //Once initials are submitted:
    //initials & score are stored
    //highscores section is displayed (initials & score)
    //go back btn takes you to the begining
    //clear button clears the scores

    clearScore.addEventListener("click", function() {
      //clear text area
      localStorage.clear(total);
    });

  //header links
    //View High scores link takes you to the highscores page
