// Using selectors to create elements directly from the html file
var startBtn = document.querySelector("#start-btn");
var playAgainBtn = document.querySelector("#playAgain-btn");
var openEl = document.querySelector("#open");
var lastEl = document.querySelector("#last");
var questionTextEl = document.querySelector("#question-text");
var questionSetEl = document.querySelector("#questionSet");
var optionsEl = document.querySelector("#options");
var timerEl = document.querySelector("#timer");
var yourScoreEl = document.querySelector("#your-score");
// The array that contains the question text, options, and answer
var questionSet = [
  {
    text: "How should one reference an external script?",
    options: [
      "a) <usejavascript src = externalfile.js>",
      "b) <javascriptelement src = externalfile.js>",
      "c) <javascriptexternal src = externalfile.js>",
      "d) <script src = externalfile.js>",
      "e) <script external = externalfile.js>",
    ],
    answer: 3,
  },
  {
    text: "What kind of HTML element should one use for JavaScript",
    options: [
      "a) <script>",
      "b) <nothing>",
      "c) <javascriptelement>",
      "d) <insert>",
      "e) <usejavascript>",
    ],
    answer: 0,
  },
  {
    text: "How can one make comments while using JavaScript?",
    options: [
      "a) make the comment here",
      "b) <make the comment here>",
      "c) //make the comment here",
      "d) !!make the comment here",
      "e) (comment)make the comment here",
    ],
    answer: 2,
  },
  {
    text: "How does one call a function in JavaScript?",
    options: [
      "a) <function>",
      "b) function()",
      "c) function",
      "d) function!",
      "e) function(call)",
    ],
    answer: 1,
  },
  {
    text: "How would one round down in JavaScript?",
    options: [
      "a) math.under(number)",
      "b) math.below(number)",
      "c) math.round(number)",
      "d) round.down(number)",
      "e) math.floor(number)",
    ],
    answer: 4,
  },
];
// Global variables
var cursor = 0;
var score = 0;
var interval;
var timeLeft = 60;
var initials = "";
startBtn.addEventListener("click", function (event) {
  //clears the original page and sets the new one
  openEl.style.display = "none";
  questionSetEl.style.display = "flex";
  //calls functions
  showQuestionData();
  startTimer();
});
function startTimer() {
    //gets the time left on timer and ensures that time on timer remains an integer
  timeLeft = parseInt(timerEl.getAttribute("data-time"));
  interval = setInterval(function () {
    timeLeft--;
        //conditional to ensure that there is still time left on the timer
    if (timeLeft > 0) {
      timerEl.textContent = timeLeft;
    } else {
      clearInterval(interval);

      questionSetEl.style.display = "none";

      lastEl.style.display = "flex";

      initials = prompt(
        "Would you like to enter your initials to save your high score?"
      );
//displays the score of 0 and initials because time ran out on the timer
      yourScoreEl.textContent = initials + " 0";
    }
    //sets my interval to remove a unit every second
  }, 1000);
}

function showQuestionData() {
    //there are still more questions to show if conditional is true
  if (cursor < 5) {
    var question = questionSet[cursor];
    //ensures that optionsEl is empty
    optionsEl.innerHTML = "";
    var questionNumber = cursor + 1;
    questionTextEl.textContent = questionNumber + ". " + question.text;
    //Display options
    question.options.forEach(function (choice, index) {
        // places the item choice in a div
      var choiceItem = document.createElement("div");
      choiceItem.setAttribute("class", "item");
      choiceItem.setAttribute("data-id", index);
      choiceItem.textContent = choice;
      optionsEl.appendChild(choiceItem);
    });
    //the user won if conditional is true
  } else if (score === 5) {

    initials = prompt(
      "Would you like to enter your initials to save your high score?"
    );

    yourScoreEl.textContent = initials + " " + timeLeft;

    clearInterval(interval);

    questionSetEl.style.display = "none";

    lastEl.style.display = "flex";
  }
  //the user completed the quiz but did not win
  else {

    initials = prompt(
      "Would you like to enter your initials to save your high score?"
    );

    yourScoreEl.textContent = initials + " 0";

    clearInterval(interval);

    questionSetEl.style.display = "none";

    lastEl.style.display = "flex";
  }
}

//function that determines if the selected choice of the user is correct or not and moves to the next question
optionsEl.addEventListener("click", function (event) {
  var question = questionSet[cursor];
  var element = event.target;
  if (element.className === "item") {
    //stores the selected choice in a variable
    var userChoice = parseInt(element.getAttribute("data-id"));
    //Determines if the selected choice is the correct answer
    if (question.answer === userChoice) {
      score++;
    } else {
      timeLeft = timeLeft - 10;
    }
    cursor++;
    showQuestionData();
  }
});

//Adds functionality to play again button to restart the webpage from the initial page
playAgainBtn.addEventListener("click", function (event) {
  lastEl.style.display = "none";
  openEl.style.display = "flex";
  cursor = 0;
  score = 0;
});
