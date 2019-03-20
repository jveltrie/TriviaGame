$(document).ready(function () {
    // ----------------------------TRIVIA GAME----------------------------

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 16;
    var intervalID;
    var indexQandA = 0; 
    var answered = false; 
    var correct;
    var triviaGame = [{
        question: "What animal has the longest lifespan?",
        answer: ["Elephant", "Blue Whale", "Giant Tortoise", "Locust"],
        correct: "2",
    }, {
        question: "What is the only mammal capable of true flight?",
        answer: ["Bat", "Flying Squirrel", "Ocelot", "Hummingbird"],
        correct: "1",
    }, {
        question: "What is the fastest flying bird in the world?",
        answer: ["Harpy Eagle", "Peregrine Falcon", "Horned Sungem", "Spine-Tailed Swift"],
        correct: "1",
    }, {
        question: "A newborn kangaroo is about the size of a...?",
        answer: ["Lima Bean", "Plum", "Grapefruit", "Watermelon"],
        correct: "0",
    }, {
        question: "What is the gestation period of a blue whale",
        answer: ["4-6 months", "10-12 months", "16-18 months", "2 years"],
        correct: "1",
    }, {
        question: "What is the smallest mammal in the world?",
        answer: ["Western Harvest Mouse", "Numbat", "Pygmy Marmoset", "Bumblebee Bat"],
        correct: "3",
    }, {
        question: "What is the largest of the great apes?",
        answer: ["Orangutan", "Western Lowland Gorilla", "Eastern Lowland Gorilla", "Mountain Gorilla"],
        correct: "3",
    }, {
        question: "What is the world's most poisonous spider?",
        answer: ["Brown Recluse", "Brazilian Wandering Spider", "Sydney Funnel Spider", "Daddy-Longlegs"],
        correct: "1",
    }];

//begin game set up

    function startGame() {
        $('.start-button').remove();
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
        loadQandA();
    }

    function loadQandA() {
        answered = false;
        timeRemaining = 16;
        intervalID = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = triviaGame[indexQandA].correct;
        var question = triviaGame[indexQandA].question;
        $('.question').html(question);
        for (var i = 0; i < 4; i++) {
            var answer = triviaGame[indexQandA].answer[i];
            $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function () {
            var id = $(this).attr('id');
            if (id === correct) {
                answered = true; 
                $('.question').text("THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
                correctAnswer();
            } else {
                answered = true; 
                $('.question').text("YOU CHOSE: " + triviaGame[indexQandA].answer[id] + ".....HOWEVER THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $('.question').text("THE CORRECT ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
            unAnswered();
        } else if (answered === true) {
            clearInterval(intervalID);
        } else {
            timeRemaining--;
            $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE');
        }
    function unAnswered() {
            unansweredQuestions++;
            $('.timeRemaining').text("YOU FAILED TO CHOOSE AN ANSWER").css({
                'color': '#3D414F'
            });
            resetRound();
        }
    }
    function correctAnswer() {
        correctAnswers++;
        $('.timeRemaining').text("CORRECT!").css({
            'color': '#3D414F'
        });
        resetRound();
    }

    function incorrectAnswer() {
        incorrectAnswers++;
        $('.timeRemaining').text("INCORRECT!").css({
            'color': '#3D414F'
        });
        resetRound();

    }

    function resetRound() {
    //didn't know how to reset round
    };

    $('.startButton').on("click", function () {
        $('.startButton');
        startGame();

    });

});