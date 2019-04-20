var questionText = $("#question");
var answerButtons = $(".answer");
var questionNumberText = $("#question-number");
var questionRemainingText = $("#question-remaining");
var scoreText = $("#score");
var timerText = $("#timer");

var questionNumber = 1;
var questionRemaining = questions.length;
var score = 0;
var questionTimer = 60;
var timer;

function setupQuestion(question) {
    questionTimer = 60;
    updateUI();

    questionText.text(question.questionText);
    for (let i = 0; i < 4; i++) {
        answerButtons[i].textContent = question.answerTexts[i];
    }

    timer = setInterval(() => {
        timerText.text(--questionTimer);
        if (questionTimer <= 0) {
            clearInterval(timer);
            timeOut();
        }
    }, 1000);

    answerButtons.click(function () {
        clearInterval(timer);
        if (this.value == question.rightAnswerIndex) {
            rightChoice();
        } else {
            wrongChoice();
        }
    });
}

function updateUI() {
    questionNumberText.text(questionNumber);
    questionRemainingText.text(questionRemaining);
    scoreText.text(score + "/" + questions.length);
}

function timeOut() {
    $("#dialogueTitle").text("Time's Up!");
    $("#dialogueBody").text("You just ran out of time.");
    endQuestion();
}
function wrongChoice() {
    $("#dialogueTitle").text("Incorrect...");
    $("#dialogueBody").text("You chose an incorrect answer");
    endQuestion();
}

function rightChoice() {
    $("#dialogueTitle").text("Correct!");
    $("#dialogueBody").text("That is correct");
    score++;
    endQuestion();
}

function endQuestion() {
    $("#dialogue").modal("show");
    answerButtons.unbind("click");
    $("#modal-button").click(function () {
        $(this).unbind("click");
        if (--questionRemaining <= 0) {
            questionRemainingText.text("0");
            $("#dialogueTitle").text("Game Over...");
            $("#dialogueBody").text("That's the end of all questions");
            $("#dialogue").modal("show");
            updateUI();
        } else {
            setupQuestion(questions[questionNumber++]);

        }
    });

}


function parseTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return minutes + ":" + seconds;
}
timerText.text(questionTimer);
setupQuestion(questions[0]);