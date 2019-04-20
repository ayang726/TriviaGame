class Question {
    constructor(questionText, answerTextsArray, rightAnswerIndex) {
        this.questionText = questionText;
        this.answerTexts = answerTextsArray;
        this.rightAnswerIndex = rightAnswerIndex;
    }
}
var question1 = new Question("What do many children ride on to go to school?", ["plane", "a school bus", "a boat", "a truck"], 1);
var question2 = new Question("Who lives in a trash can on 'Sesame Street'?", ["Oscar", "Elmo", "Maria", "Cookie Monster"], 0);
var question3 = new Question("What color does the sky appear to be when it rains?", ["blue", "gray", "red", "white"], 1);
var question4 = new Question("What is the su of 5+2?", ["8", "10", "3", "7"], 3);
var question5 = new Question("What farm animal gives us milk to drink?", ["dog", "horse", "cow", "chicken"], 2);
var question6 = new Question("In 'Snow White' what did the Prince do to wake her up?", ["he kissed her", "he yelled at her", "he shook her", "he touched her on the nose"], 0);
var question7 = new Question("What is the teacher most likely to use to get chalk off the blackboard?", ["a napkin", "a feather duster", "a chalk eraser", "her shirt sleeve"], 2);
var question8 = new Question("On 'Sesame Street' what character is big and yellow?", ["Big Bird", "Snuffy", "Telly", "Kermit"]);
var question9 = new Question("What animal purrs and is known for chasing mice?", ["a seal", "a kangaroo", "a mule", "a cat"], 3);







var questions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9];