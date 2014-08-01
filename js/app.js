$(document).ready(function(){
	var numberCorrect = 0;
	var questionNumber = 1;
	var correctAnswer = 'A';

	//Create all answer objects
	var answer1A = new Answer("A", true, "James Rodriguez");
	var answer1B = new Answer("B", true, "Arjen Robben");
	var answer1C = new Answer("C", true, "Tomas Mueller");
	var answer1D = new Answer("D", true, "Lionel Messi");
	var answer2A = new Answer("A", true, "Manuel Neuer");
	var answer2B = new Answer("B", true, "Vincent Enyema");
	var answer2C = new Answer("C", true, "Tim Howard");
	var answer2D = new Answer("D", true, "Guillermo Ochoa");
	var answer3A = new Answer("A", true, "France, Italy, Nigeria");
	var answer3B = new Answer("B", true, "Brazil, Germany, England");
	var answer3C = new Answer("C", true, "USA, Mexico, Spain");
	var answer3D = new Answer("D", true, "Germany, Argentina, Netherlands");
	var answer4A = new Answer("A", true, "Round of 16");
	var answer4B = new Answer("B", true, "Group Stage");
	var answer4C = new Answer("C", true, "Final");
	var answer4D = new Answer("D", true, "Semi-Finals");
	var answer5A = new Answer("A", true, "Qatar, 2022");
	var answer5B = new Answer("B", true, "Russia, 2018");
	var answer5C = new Answer("C", true, "USA, 2018");
	var answer5D = new Answer("D", true, "England, 2022");

	//Create all question objects
	var question1 = new Question(1, "Who scored the most goals in the competition?", answer1A, answer1B, answer1C, answer1D);
	var question1 = new Question(2, "Who had the most saves in the competition?", answer2A, answer2B, answer2C, answer2D);
	var question1 = new Question(3, "Who the top three teams in the competition?", answer3A, answer3B, answer3C, answer3D);
	var question1 = new Question(4, "How far did the US National team go?", answer4A, answer4B, answer4C, answer4D);
	var question1 = new Question(5, "Where and when will the next world cup be?", answer5A, answer5B, answer5C, answer5D);


	//Constructor for Answer object
	function Answer(letter, correct, val) {
		this.letter = letter;
		this.correct = correct;
		this.val = val;
	}

	//Constructor for Question object
	function Question(number, question, answerA, answerB, answerC, answerD) {
		this.number = number;
		this.question = question;
		this.answerA = answerA;
		this.answerB = answerB;
		this.answerC = answerC;
		this.answerD = answerD;
	}
});