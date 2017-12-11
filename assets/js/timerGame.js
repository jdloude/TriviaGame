
// needs a varible for: timer, quetion objects, numers or correct, number of wrong, correct answer, arry of questions to skip through, missed questions.
let timeForQuestion = 15;
let totalTime = 0;
let numberofQuestions = 0;
let numberOfCorrect = 0;
let numberOfWrong = 0;
let numberOfUnanswered = 0;
let currentQuestionArry = 0;
let correctAnswer;

//sets up the objects for the questions with choices and answers

let questionOne = {

	question: "who is the Full metal Alchemist?",
	optionOne: "Roy Mustang",
	optionTwo: " Alex Louis Armstrong",
	optionThree: "Edward Elric",
	optionFour: " Alphonse Elric",
	answer: "Edward Elric"

}

let questionTwo = {

	question: "who was Spikes love in Cowboy Bepop?",
	optionOne: "Faye",
	optionTwo: "Julia",
	optionThree: "Ein",
	optionFour: "Edward",
	answer: "Julia"

}

let questionThree = {

	question: "Who is Lelouch's closet related sister in Code Geass?",
	optionOne: "Cornelia",
	optionTwo: "Nunnally",
	optionThree: "C.C.",
	optionFour: "Kallen",
	answer: "Nunnally"

}

let questionFour = {

	question: "What game did team blank play in No Game No Life to enter an alternate universe?",
	optionOne: "Checkers",
	optionTwo: "Poker",
	optionThree: "A MMORPG",
	optionFour: "Chess",
	answer: "Chess"

}

//An array to hold the question list to cycle through
let questionArry = [questionOne, questionTwo, questionThree, questionFour];

//makes a function to show the current question
let questionShowing = (q) => {
	
	currentQuestion = q;
	//sets the question timer
	timeForQuestion = 15;
	counter = setInterval(timer, 1000);

	//Loads the current question information into the html 
	$(".questions").html("<h2>" + currentQuestion.question + "</h2>");
	$(".timer").html(timer());
	$(".choices").append("<p class='choice'>" + currentQuestion.optionOne + "</p>");
	$(".choices").append('<p class="choice">' + currentQuestion.optionTwo + '</p>');
	$(".choices").append('<p class="choice">' + currentQuestion.optionThree + '</p>');
	$(".choices").append('<p class="choice">' + currentQuestion.optionFour + '</p>');

	//Sets up a on click event 
	$(".choices p").on("click", function(){

		//sets the current answer to whatever option was clicked
		currentAnswer = $(this).html();

		checkAnswer(currentAnswer);
		done();

	});
};

let checkAnswer = (currentAnswer) => {

	if (currentAnswer === currentQuestion.answer){

		numberOfCorrect++;
		numberofQuestions++;
		currentQuestionArry++;
		$(".choices").empty();
		$(".timer").empty();
		clearInterval(counter);
		confirm("You got it right!");
		questionShowing(questionArry[currentQuestionArry]);
		done();
	}

	else {

		numberOfWrong++;
		numberofQuestions++;
		currentQuestionArry++;
		$(".choices").empty();
		$(".timer").empty();
		clearInterval(counter);
		confirm("You got it wrong!");
		questionShowing(questionArry[currentQuestionArry]);
		done();

	};
};


let timer = () => {

	timeForQuestion--;
	$('.timer').html("<p>Time remaining: " + timeForQuestion + "</p>")

	if (timeForQuestion === 0) {

		numberOfUnanswered++;
		clearInterval(counter);

	};
};

let done = () => {
	if (numberofQuestions === (questionArry.length)){		
		$('.questions').append("<h1>Results</h1>");
		$('.choices').append("<h3>Number of Correct Answers: " + numberOfCorrect + "</h3>" );
		$('.choices').append("<h3>Number of Wrong Answers: " + numberOfWrong + "</h3>" );
		$('.choices').append("<h3>Number of Unanswered Questions: " + numberOfUnanswered + "</h3>" );
	};
};

$(document).ready(function(){

	questionShowing(questionArry[currentQuestionArry]);


});



	//each question needs buttons for the for the answer to recieve an on click event.

	//The buttons need to all be styled the same and have scroll over css changes. each contain a possible answer

	// There needs to be a countdown timer that stops at zero and triggers event.

		// on reaching zero it will need to add to the unanswered questions var. and give some new background with new missed information. Also, reset with a new question and same layout.


	//each question that is correct needs to be check with the object children. if correct add to # of correct question var. give some new background with new correct information. Also, reset with a new question and same layout.

	//else each question that is wrong add to the # of wrong var and give some new background with new missed information. Also, reset with a new question and same layout.

	//once all questions used display either winning or lose screen and display all # of wins and # of losses along with time spent.