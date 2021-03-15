var startQuiz = document.querySelector("#startBtn");
var timeTracker = document.querySelector("#timeT");
var introPage = document.querySelector("#intro");
var questionDisplay = document.querySelector("#question");
var displayResults = document.querySelector("#results");
var h3 = document.createElement("h3");
var answerReveal = document.querySelector("#correctness");
var correctAnswers = 0;
var q1a1 = document.createElement("button");
var q1a2 = document.createElement("button");
var q1a3 = document.createElement("button");
var q1a4 = document.createElement("button");
var q2a1 = document.createElement("button");
var q2a2 = document.createElement("button");
var q2a3 = document.createElement("button");
var q2a4 = document.createElement("button");
var q3a1 = document.createElement("button");
var q3a2 = document.createElement("button");
var q3a3 = document.createElement("button");
var q3a4 = document.createElement("button");
var q4a1 = document.createElement("button");
var q4a2 = document.createElement("button");
var q4a3 = document.createElement("button");
var q4a4 = document.createElement("button");
var q5a1 = document.createElement("button");
var q5a2 = document.createElement("button");
var q5a3 = document.createElement("button");
var q5a4 = document.createElement("button");
var scoreDisplay = document.querySelector("#score");
var highScoresDisplay = document.querySelector("#highScores");
var initialsInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var scoreInitialsDisplayed = document.querySelector("#textArea");
var highScoresLink = document.querySelector("#viewHighScores");
var goBackBtn = document.querySelector("#goBack");
var section1 = document.getElementsByTagName("section")[0];
var section2 = document.getElementsByTagName("section")[1];
var section3 = document.getElementsByTagName("section")[2];
var header = document.body.children[0];
var clearBtn = document.querySelector("#clearHighScores");
var timeLeft = 300;


var questions = [ 
    {
      title: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"], 
      answer: "3. alerts"
    },
    {
      title: "The condition in an if/else statement is enclosed within _____.",
      options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"], 
    },
    {
      title: "Arrays in JavaScript can be used to store _____ .",
      options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"], 
    },
    {
      title: "String values must be enclosed within ______ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"], 
    },
    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"], 
    }
]

//when start button is clicked, timer starts and question is presented
startQuiz.addEventListener("click", function() {
  var timerInterval = setInterval(setTime, 1000);
  function setTime() {
      do {
        timeLeft--;
      }
      while (timeLeft < 0); 
    
      timeTracker.textContent = "Time: " + timeLeft + " sec";

        if(timeLeft == 0) {
          console.log("times up");
        }
  }
  
  introPage.style.display = "none";
  questionDisplay.style.display = "block";
  setTime();
  displayQuestion1();
});

function displayQuestion1() {
    removeQuestion2();
    removeQuestion3();
    removeQuestion4();
    removeQuestion5();

    h3.innerHTML = questions[0].title;
    q1a1.textContent = questions[0].options[0];
    q1a2.textContent = questions[0].options[1];
    q1a3.textContent = questions[0].options[2];
    q1a4.textContent = questions[0].options[3];

    questionDisplay.appendChild(h3);
    questionDisplay.appendChild(q1a1);
    questionDisplay.appendChild(q1a2);
    questionDisplay.appendChild(q1a3);
    questionDisplay.appendChild(q1a4);

    q1a1.addEventListener("click", function(){
      question1Answers();
    });
    q1a2.addEventListener("click", function(){
      question1Answers();
    });
    q1a4.addEventListener("click", function(){
      question1Answers();
    });

    q1a3.addEventListener("click", function(){
      removeQuestion1();
      displayQuestion2();
      answerReveal.style.display = "block";
      answerReveal.innerHTML = "Correct!";
      correctAnswers++;

      setTimeout (function (){
        answerReveal.style.display = "none";
        answerReveal.textContent = "";
      },2000);
    });
}

function removeQuestion1() {
  h3.remove();
  q1a1.remove();
  q1a2.remove();
  q1a3.remove();
  q1a4.remove();
}

function question1Answers() {
  removeQuestion1();
  displayQuestion2();
  answerReveal.style.display = "block";
  answerReveal.innerHTML = "Wrong!";
  //remove time from timer
  setTimeout (function (){
    answerReveal.style.display = "none";
    answerReveal.textContent = "";
  },2000);
  timeLeft--;
}

function displayQuestion2() {
  removeQuestion1();
  removeQuestion3();
  removeQuestion4();
  removeQuestion5();
  questionDisplay.insertAdjacentElement("afterbegin", h3);
  h3.innerHTML = questions[1].title;
  q2a1.textContent = questions[1].options[0];
  q2a2.textContent = questions[1].options[1];
  q2a3.textContent = questions[1].options[2];
  q2a4.textContent = questions[1].options[3];

  questionDisplay.appendChild(h3);
  questionDisplay.appendChild(q2a1);
  questionDisplay.appendChild(q2a2);
  questionDisplay.appendChild(q2a3);
  questionDisplay.appendChild(q2a4);

  q2a1.addEventListener("click", function(){
    question2Answers();
  });
  q2a3.addEventListener("click", function(){
    question2Answers();
  });
  q2a4.addEventListener("click", function(){
    question2Answers();
  });

  q2a2.addEventListener("click", function(){
    removeQuestion2();
    displayQuestion3();
    answerReveal.style.display = "block";
    answerReveal.innerHTML = "Correct!";
    correctAnswers++;

    setTimeout (function (){
      answerReveal.style.display = "none";
      answerReveal.textContent = "";
    },2000);
  });
}

function removeQuestion2() {
  h3.remove();
  q2a1.remove();
  q2a2.remove();
  q2a3.remove();
  q2a4.remove();
}

function question2Answers() {
  removeQuestion2();
  displayQuestion3();
  answerReveal.style.display = "block";
  answerReveal.innerHTML = "Wrong!";
  //remove time from timer
  setTimeout (function (){
    answerReveal.style.display = "none";
    answerReveal.textContent = "";
  },2000);
  timeLeft--;
}

function displayQuestion3() {
  removeQuestion1();
  removeQuestion2();
  removeQuestion4();
  removeQuestion5();
  questionDisplay.insertAdjacentElement("afterbegin", h3);
  h3.innerHTML = questions[2].title;
  q3a1.textContent = questions[2].options[0];
  q3a2.textContent = questions[2].options[1];
  q3a3.textContent = questions[2].options[2];
  q3a4.textContent = questions[2].options[3];

  questionDisplay.appendChild(h3);
  questionDisplay.appendChild(q3a1);
  questionDisplay.appendChild(q3a2);
  questionDisplay.appendChild(q3a3);
  questionDisplay.appendChild(q3a4);

  q3a1.addEventListener("click", function(){
    question3Answers();
  });
  q3a2.addEventListener("click", function(){
    question3Answers();
  });
  q3a3.addEventListener("click", function(){
    question3Answers();
  });

  q3a4.addEventListener("click", function(){
    removeQuestion3();
    displayQuestion4();
    answerReveal.style.display = "block";
    answerReveal.innerHTML = "Correct!";
    correctAnswers++;

    setTimeout (function (){
      answerReveal.style.display = "none";
      answerReveal.textContent = "";
    },2000);
  });
}

function removeQuestion3() {
  h3.remove();
  q3a1.remove();
  q3a2.remove();
  q3a3.remove();
  q3a4.remove();
}

function question3Answers() {
  removeQuestion3();
  displayQuestion4();
  answerReveal.style.display = "block";
  answerReveal.innerHTML = "Wrong!";
  //remove time from timer
  setTimeout (function (){
    answerReveal.style.display = "none";
    answerReveal.textContent = "";
  },2000);
  timeLeft--;
}

function displayQuestion4() {
  removeQuestion1();
  removeQuestion2();
  removeQuestion3();
  removeQuestion5();
  questionDisplay.insertAdjacentElement("afterbegin", h3);
  h3.innerHTML = questions[3].title;
  q4a1.textContent = questions[3].options[0];
  q4a2.textContent = questions[3].options[1];
  q4a3.textContent = questions[3].options[2];
  q4a4.textContent = questions[3].options[3];

  questionDisplay.appendChild(h3);
  questionDisplay.appendChild(q4a1);
  questionDisplay.appendChild(q4a2);
  questionDisplay.appendChild(q4a3);
  questionDisplay.appendChild(q4a4);

  q4a1.addEventListener("click", function(){
    question4Answers();
  });
  q4a2.addEventListener("click", function(){
    question4Answers();
  });
  q4a4.addEventListener("click", function(){
    question4Answers();
  });

  q4a3.addEventListener("click", function(){
    removeQuestion4();
    displayQuestion5();
    answerReveal.style.display = "block";
    answerReveal.innerHTML = "Correct!";
    correctAnswers++;

    setTimeout (function (){
      answerReveal.style.display = "none";
      answerReveal.textContent = "";
    },2000);
  });
}

function removeQuestion4() {
  h3.remove();
  q4a1.remove();
  q4a2.remove();
  q4a3.remove();
  q4a4.remove();
}

function question4Answers() {
  removeQuestion4();
  displayQuestion5();
  answerReveal.style.display = "block";
  answerReveal.innerHTML = "Wrong!";
  //remove time from timer
  setTimeout (function (){
    answerReveal.style.display = "none";
    answerReveal.textContent = "";
  },2000);
  timeLeft--;
}

function displayQuestion5() {
  removeQuestion1();
  removeQuestion2();
  removeQuestion3();
  removeQuestion4();
  questionDisplay.insertAdjacentElement("afterbegin", h3);
  h3.innerHTML = questions[4].title;
  q5a1.textContent = questions[4].options[0];
  q5a2.textContent = questions[4].options[1];
  q5a3.textContent = questions[4].options[2];
  q5a4.textContent = questions[4].options[3];

  questionDisplay.appendChild(h3);
  questionDisplay.appendChild(q5a1);
  questionDisplay.appendChild(q5a2);
  questionDisplay.appendChild(q5a3);
  questionDisplay.appendChild(q5a4);

  q5a1.addEventListener("click", function(){
    question5Answers();
  });
  q5a2.addEventListener("click", function(){
    question5Answers();
  });
  q5a3.addEventListener("click", function(){
    question5Answers();
  });

  q5a4.addEventListener("click", function(){
    correctAnswers++;
    removeQuestion5();
    displayResults.style.display = "block";
    resultTasks();
    answerReveal.style.display = "block";
    answerReveal.innerHTML = "Correct!";

    setTimeout (function (){
      answerReveal.style.display = "none";
      answerReveal.textContent = "";
    },2000);
  });
}

function removeQuestion5() {
  h3.remove();
  q5a1.remove();
  q5a2.remove();
  q5a3.remove();
  q5a4.remove();
}

function question5Answers() {
  removeQuestion5();
  displayResults.style.display = "block";
  resultTasks();
  answerReveal.style.display = "block";
  answerReveal.innerHTML = "Wrong!";
  //remove time from timer
  setTimeout (function (){
    answerReveal.style.display = "none";
    answerReveal.textContent = "";
  },2000);
}

var savedScore = localStorage.getItem("scoreKeeper");
var savedInitials = localStorage.getItem("initialsContent")

function resultTasks() {
  var totalPoints = (correctAnswers * 5);
  scoreDisplay.textContent = "Your final score is " + totalPoints + ".";
  clearInterval();
  localStorage.setItem("scoreKeeper", totalPoints);

  submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("initialsContent", initialsInput.value);
    scoreInitialsDisplayed.textContent = initialsInput.value + " " + totalPoints;
    displayResults.style.display = "none";
    highScoresDisplay.style.display = "block";
    highScoreStorageDisplay();
  });

}


function highScoreStorageDisplay() {
  highScoresLink.remove();
}

goBackBtn.addEventListener("click", function(){
  correctAnswers = 0;
  highScoresDisplay.style.display = "none";
  introPage.style.display = "block";
  header.insertAdjacentElement("afterbegin", highScoresLink);
  initialsInput.value = "";
});

clearBtn.addEventListener("click", function(){
    localStorage.removeItem("scoreKeeper");
    localStorage.removeItem("initialsContent");
    scoreInitialsDisplayed.textContent = "";
});

highScoresLink.addEventListener("click", function(){
  section1.style.display = "none";
  section2.style.display = "none";
  section3.style.display = "none";
  highScoresDisplay.style.display = "block";
});


