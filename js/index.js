var $ = require('jquery');
var makeBackgroundRed = require('./background');

$(document).ready(function() {
    makeBackgroundRed();
});

var QUESTIONS = [
    {
        text: 'What color is the sky?',
        answers: [
            'Blue',
            'Yellow',
            'Red',
            'Up for Debate'
        ],
        correct: 0
    },
    {
        text: 'How many woods could a woodchuck chuck?',
        answers: [
            '8',
            'too many',
            'none',
            'not enough'
        ],
        correct: 1
    },
    {
        text: 'Is this real life?',
        answers: [
            'up for debate',
            'who knows?!',
            'no, we\'re an experimental project',
            'without a doubt'
        ],
        correct: 2
    },
    {
        text: 'Who really is America\'s sweetheart?',
        answers: [
            'Julia Roberts',
            'Carmen San Diego',
            'Hillary Clinton',
            'Minnie Mouse'
        ],
        correct: 3
    }
];

var questionsPageElement = $('.questions-page');
var questionCurrentElement = $('.question-current');
var questionsTotalElement = $('.questions-total');
var questionElement = $('.question');
var answersElement = $('.answers');

var resultsPageElement = $('.results-page');
var scoreElement = $('.score');
var restartButtonElement = $('.restart-button');

var showResults = function() {
    questionsPageElement.hide();
    resultsPageElement.show();
};

var showQuestions = function() {
    resultsPageElement.hide();
    questionsPageElement.show();
};

var resetScore = function() {
    scoreElement.text(0);
};

var increaseScore = function() {
    var score = parseInt(scoreElement.text(), 10);
    scoreElement.text(score + 1);
};

var setQuestion = function(questionIndex) {
    var question = QUESTIONS[questionIndex];
    questionCurrentElement.text(questionIndex);
    questionElement.text(question.text);
    answersElement.empty();
    for (var i=0; i<question.answers.length; i++) {
        var answer = question.answers[i];
        answersElement.append(`<li><button type="button">${answer}</button></li>`);
    }
};

answersElement.on('click', 'button', function() {
    var choice = $(this).parent().index();
    var questionIndex = parseInt(questionCurrentElement.text(), 10);
    var question = QUESTIONS[questionIndex];
    if (question.correct === choice) {
        increaseScore();
    }

    if (questionIndex + 1 < QUESTIONS.length) {
        setQuestion(questionIndex + 1);
    }
    else {
        showResults();
    }
});

restartButtonElement.click(function() {
    setQuestion(0);
    resetScore();
    showQuestions();
});

$(document).ready(function() {
    questionsTotalElement.text(QUESTIONS.length);
    setQuestion(0);
});