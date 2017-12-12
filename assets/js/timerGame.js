
// needs a varible for: timer, quetion objects, numers or correct, number of wrong, correct answer, arry of questions to skip through, missed questions.
let timeForQuestion = 15;
let totalTime = 0;
let numberOfQuestions = 0;
let numberOfCorrect = 0;
let numberOfWrong = 0;
let numberOfUnanswered = 0;
let currentQuestionArry = 0;
let correctAnswer;
let timeToReload = 10;

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

	//sets up the current question
	currentQuestion = q;

	//sets the question timer
	timeForQuestion = 15;

	//sets up the counter set to 1 second
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

		//calls the check answer fuction with the arrgument of current asnwer
		checkAnswer(currentAnswer);

	});
};

// Makes a function to check the answer vrs the choice
let checkAnswer = (currentAnswer) => {

	//checks if the choice and answer are the same and is active if the question is right
	if (currentAnswer === currentQuestion.answer){

		//increases the number of correct
		numberOfCorrect++;

		//increases the number of questions to help end the game
		numberOfQuestions++;

		//increases the number to cycle through the questions index
		currentQuestionArry++;

		//clears contents of the classes to display new information
		$(".questions").empty();
		$(".choices").empty();
		$(".timer").empty();

		//replaces the empty classes with some HTML data
		$('.questions').html("<h1>You got it right! Great job you are one step closer to the otaku!</h1>" );

		//clears the counter variable
		clearInterval(counter);

		//calls the answerScreen function
		answerScreen();
	}

	//active if the question is wrong
	else {

		//increases the number of wrong answer
		numberOfWrong++;

		//increases the number of questions to help end the game
		numberOfQuestions++;

		//increases the number to cycle through the questions index
		currentQuestionArry++;

		//clears contents of the classes to display new information
		$(".questions").empty();
		$(".choices").empty();
		$(".timer").empty();

		//replaces the empty classes with some HTML data
		$('.questions').html("<h1>You got it wrong! Are you really an anime fan? The correct answer was " + currentQuestion.answer + "</h1>" );
		
		//clears the counter variable
		clearInterval(counter);

		//calls the answerScreen function
		answerScreen();

	};
};

//sets the timer function
let timer = () => {

	//decreases the time for question by 1
	timeForQuestion--;
	
	//loads some HTML data to write in for the remaing time
	$('.timer').html("<h1>Time Remaining: " + timeForQuestion + "</h1>")

	//called when the time is equal to 0
	if (timeForQuestion === 0) {

		//calls the timeOut function
		timeOut();
	}
};

//sets up the timeOut function
let timeOut = () =>{

	//sets an if statement for when the timer reaches 0
	if (timeForQuestion === 0) {

		//increases the number to cycle through the questions index
		currentQuestionArry++;

		//increases the number of unaswered questions
		numberOfUnanswered++;

		//increases the number of questions to help end the game
		numberOfQuestions++;

		//clears contents of the classes to display new information
		$(".questions").empty();
		$(".choices").empty();
		$(".timer").empty();

		//replaces the empty classes with some HTML data
		$('.questions').html("<h1>You didn't answer! Are you really an anime fan? <br> The correct answer was " + currentQuestion.answer + "</h1>" );
		
		//clears the counter variable
		clearInterval(counter);

		//calls the answerScreen function
		answerScreen();
	}
};

//sets the answerScreen function
let answerScreen = () => {

	//determains if the game should end or not depending on how many questions have passsed
	if (numberOfQuestions === questionArry.length){

		//sets a timeout function to load the done function if the # of questions is equl to questionArry.length
		setTimeout(function() {done()}, 5000);
	}

	//if the game is not over load a new question
	else {
		setTimeout(function() {questionShowing(questionArry[currentQuestionArry])}, 5000);
	}
};

let reloadTime = () => {

	timeToReload--;

	$('.reloads').html("<h1>This game will restart in " + timeToReload + " seconds!</h1>");


}

//sets the done function to be called when the game is over
let done = () => {

	//determains if the game should end or not depending on how many questions have passsed
	if(numberOfQuestions === questionArry.length){

		//clears contents of the classes to display new information
		$(".questions").empty();
		$(".choices").empty();

		//removes content so it is not displayed anymore
		$(".timer").remove();

		//replaces the empty classes with some HTML data
		$('.questions').append("<h1>Results</h1>");
		$('.results').append("<h3>Number of Correct Answers: " + numberOfCorrect + "</h3>" );
		$('.results').append("<h3>Number of Wrong Answers: " + numberOfWrong + "</h3>" );
		$('.results').append("<h3>Number of Unanswered Questions: " + numberOfUnanswered + "</h3>" );

		timeToReload = 11;

		//sets up the reloadT set to 1 second
		reloadT = setInterval(reloadTime, 1000);

		//calls the reload count down into the reloads class
		$(".reloads").html(reloadTime());
		

		//clears the counter variable
		clearInterval(counter);

		//restarts the game after 10 seconds
		setTimeout(function() {location.reload()}, 10000);
	}
};

//starts the game
$(document).ready(function(){

	//loads in the 0 index of the question arry
	questionShowing(questionArry[currentQuestionArry]);

});

//end of js