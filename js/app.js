$(document).ready(function(){
	var numberCorrect = 0;
	var questionNumber = 0;
	var correctAnswer = 'A';
	var correct = false;

	//Create all answer objects
	var answer1A = new Answer("A", true, "James Rodriguez");
	var answer1B = new Answer("B", false, "Arjen Robben");
	var answer1C = new Answer("C", false, "Tomas Mueller");
	var answer1D = new Answer("D", false, "Lionel Messi");
	var answers1 = [answer1A, answer1B, answer1C, answer1D];
	var answer2A = new Answer("A", false, "Manuel Neuer");
	var answer2B = new Answer("B", false, "Vincent Enyema");
	var answer2C = new Answer("C", true, "Tim Howard");
	var answer2D = new Answer("D", false, "Guillermo Ochoa");
	var answers2 = [answer2A, answer2B, answer2C, answer2D];
	var answer3A = new Answer("A", false, "France, Italy, Nigeria");
	var answer3B = new Answer("B", false, "Brazil, Germany, England");
	var answer3C = new Answer("C", false, "USA, Mexico, Spain");
	var answer3D = new Answer("D", true, "Germany, Argentina, Netherlands");
	var answers3 = [answer3A, answer3B, answer3C, answer3D];
	var answer4A = new Answer("A", true, "Round of 16");
	var answer4B = new Answer("B", false, "Group Stage");
	var answer4C = new Answer("C", false, "Final");
	var answer4D = new Answer("D", false, "Semi-Finals");
	var answers4 = [answer4A, answer4B, answer4C, answer4D];
	var answer5A = new Answer("A", false, "Qatar, 2022");
	var answer5B = new Answer("B", true, "Russia, 2018");
	var answer5C = new Answer("C", false, "USA, 2018");
	var answer5D = new Answer("D", false, "England, 2022");
	var answers5 = [answer5A, answer5B, answer5C, answer5D];

	//Create all question objects
	var question1 = new Question(1, "Who scored the most goals in the competition?", answers1);
	var question2 = new Question(2, "Who had the most saves in the competition?", answers2);
	var question3 = new Question(3, "Who the top three teams in the competition?", answers3);
	var question4 = new Question(4, "How far did the US National team go?", answers4);
	var question5 = new Question(5, "Where and when will the next world cup be?", answers5);
	var questions = [question1, question2, question3, question4, question5];


	$(".start").click(function(){
		$("#first").hide();
		nextQuestion(); //Display next question 
	});

	$(".answer").click(function(){
		correct = isCorrect($(this).find("span").attr("id")); //Is the selected answer correct? 
		$("#second").hide();
		$("#third").fadeIn(1000);
	});

	$(".continue").click(function(){
		$("#third").hide();
		if(questionNumber < 5) {
			nextQuestion(); 
		} else {
			showFinish();
		}
	});

	//Display the next question
	function nextQuestion(){
		$(".question").text(questions[questionNumber].question);
		questions[questionNumber].showAnswers();
		$("#second").fadeIn(1000);
	}

	//Method for questions object: Display each answer
	function showAnswers(){
		$(".answer #a").text(this.answers[0].val);
		$(".answer #b").text(this.answers[1].val);
		$(".answer #c").text(this.answers[2].val);
		$(".answer #d").text(this.answers[3].val);
	}

	function showFinish(){
		if(numberCorrect >= 3) {
			$("#final").text("Congrats!");
			$(".number").text(numberCorrect);
		} else {
			$("#final").text("Sorry!");
			$(".number").text(numberCorrect);
		}
		$("#fourth").fadeIn(1000);
	}

	//Is the selected answer correct?
	function isCorrect(letter){
		for(i = 0; i < 4; i++) {
			var ans = questions[questionNumber].answers[i]
			if(ans.letter == letter.toUpperCase()) {
				if(ans.correct == true) {
					numberCorrect++;
					$("#correct").text("Correct!");
					$(".number").text(numberCorrect);
					questionNumber++;
					return true;
				} else {
					$("#correct").text("Incorrect :(");
					$(".number").text(numberCorrect);
					questionNumber++;
					return false;
				}
			} 
		}
	}

	//Constructor for Answer object
	function Answer(letter, correct, val) {
		this.letter = letter;
		this.correct = correct;
		this.val = val;
	}

	//Constructor for Question object
	function Question(number, question, answers) {
		this.number = number;
		this.question = question;
		this.answers = answers;
		this.showAnswers = showAnswers;
	}
});