
  $(document).ready(function() {
      
      
    <script src="/path/to/jquery.js"></script>

    

    var startButton = $("<button>");
    startButton.attr("class", "startBt")
    var startPhrase = "Go!";
    startButton.text(startPhrase);
    $("#start-button").append(startButton);
    

    var codeQuestions = [
    {
        questionAsked: "How should one reference an external script?",
        answerChoices: [
        "a) <usejavascript src = externalfile.js>",
        "b) <javascriptelement src = externalfile.js>",
        "c) <javascriptexternal src = externalfile.js>",
        "d) <script src = externalfile.js>",
        "e) <script external = externalfile.js>"
    ],
    questionAnswer: 3
    },
    {
        questionAsked: "What kind of HTML element should one use for JavaScript",
        answerChoices: [
        "a) <script>",
        "b) <nothing>",
        "c) <javascriptelement>",
        "d) <insert>",
        "e) <usejavascript>"
    ],
    questionAnswer: 0
    },
    {
        questionAsked: "How can one make comments while using JavaScript?",
        answerChoices: [
        "a) make the comment here",
        "b) <make the comment here>",
        "c) //make the comment here",
        "d) !!make the comment here",
        "e) (comment)make the comment here"
    ],
    questionAnswer: 2
    },
    {
        questionAsked: "How does one call a function in JavaScript?",
        answerChoices: [
        "a) <function>",
        "b) function()",
        "c) function",
        "d) function!",
        "e) function(call)"
    ],
    questionAnswer: 1
    },
    {
        questionAsked: "How would one round down in JavaScript?",
        answerChoices: [
        "a) math.under(number)",
        "b) math.below(number)",
        "c) math.round(number)",
        "d) round.down(number)",
        "e) math.floor(number)"
    ],
    questionAnswer: 4
    },
    
];
    
    var cursor = 0;
      var score = 0;
      var interval = 0;

    
    choicesEl.addEventListener("click", function(event){
        var element = event.target;
        var question = questions[cursor];
        if(element.getAttribute("class") === "item") {
            // allow the user to select from one of the choices
            console.log("make sure this is item");
            var id = parseInt(element.getAttribute("data-id"));
            // determine if the choice is equal to the selected answer    
if (codeQuestions.answerChoices === id) {
console.log("correct answer");
score++;
} else {
console.log("wrong answer");
}
cursor++;
console.log("SCORE", score);
showQuestionData();
}   
});


    
  $("showQuestionData()"),function() {
      var question = codeQuestions[cursor];
      choicesEl.innerHTML = "";
      questionTextEl.textContent = "1. " + question.text;
    //display choices          
codeQuestions.answerChoices.forEach(function(answerChoices, index){
//<div class = "item" data-id = "1">Item 2</div>
var shownChoice = $("<div>");
    shownChoice.attr("class", "item");
    shownChoice.attr("data-id", index);
    shownchoice.text("choice");
    //choicesEl.appendChild(choiceItem);
});
  }


$("startTimer"), function() {
    timeRemaining = parseInt(timer.getAttribute("timer-clock"));
    sInterval = setInterval(function(){
        timeRemaining--;
        if (timeRemaining > 0) {
            timer.text(timeRemaining);
        } else {
            console.log("END GAME");
            clearInterval(sInterval);
        }
    }, 1000);
}


    $(".startBt").on("click", function(){
        //landingEl.style.display = "none";
        //questionEL.style.display = "flex";
        //show my first question
        //display the question with the question number
        var question = questions[cursor];
        questionTextEl.textContent = "1. " + question.test;
        console.log("we have started");
        var showQuestions = "<div>";
            showQuestionData();
            startTimer();
    });
});