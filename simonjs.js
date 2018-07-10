var gameActive = false;
var stageNumber;
var correctAnswer = [];
var submittedAnswer = [];
var instructions = [];
var tempText;
var randomRule;
const colorList = ['Red', 'Dark Blue', 'Green', 'Purple', 'Orange', 'Pink', 'Light Blue', 'White', 'Brown'];

const keypadPressing = document.addEventListener("keypress",function(event) {
	var x = event.keyCode;
	switch (x) {
		case 49:
			pressRed();
			break;
		case 50:
			pressDarkBlue();
			break;
		case 51:
			pressGreen();
			break;
		case 52:
			pressPurple();
			break;
		case 53:
			pressOrange();
			break;
		case 54:
			pressPink();
			break;
		case 55:
			pressLightBlue();
			break;
		case 56:
			pressWhite();
			break;
		case 57:
			pressBrown();
			break;
		default:
	}
} );

function printInstructions(start) {
	tempText = "<p>" + Math.max(1,start-2) + ". " + instructions[0] + "</p><p>" + Math.max(1,start-1) + ". " + instructions[1] + "</p><p>" + start + ". " + instructions[(2)];
	document.getElementById("instructions").innerHTML = tempText;
}
	

function RNG(maxvalue) {
	return Math.floor(Math.random()*maxvalue);
}

//function addCorrect(

function resetGame() {
	stageNumber = 0;
	correctAnswer = [];
	submittedAnswer = [];
	instructions[0] = '';
	instructions[1] = '';
	instructions[2] = '';
	printInstructions(1);
	startGame();
}
	

function startGame() {
	if (gameActive == false) {
		gameActive = true;
		document.getElementById("instructions").innerHTML = ' ';
		stageNumber = 1;
		correctAnswer = [];
		submittedAnswer = [];
		document.getElementById("StageNumber").value = stageNumber;
		for (i=0;i<3;++i) {
			correctAnswer.push(RNG(9));
		}
		tempText = "Start with " + colorList[correctAnswer[0]] + ", " + colorList[correctAnswer[1]] + ", and " + colorList[correctAnswer[2]] + "."
		document.getElementById("instructions").innerHTML = tempText;
	}
}

function checkCurrentAnswer() {
	if (gameActive == true) {
		var numberButtonsPressed = submittedAnswer.length;
		var numberButtonsExpected = correctAnswer.length;
		var moveToNext = false;
		if (numberButtonsPressed == numberButtonsExpected) {
			moveToNext = true;
		}
		var correctToHere = true;
		for (i=0; i<submittedAnswer.length;++i) {
			if (submittedAnswer[i] != correctAnswer[i]) { correctToHere = false; }
			if (correctToHere == false) { 
				var instructions = [];
				document.getElementById("instructions").innerHTML = " Game Over. ";
				incrementArray(submittedAnswer);
				incrementArray(correctAnswer);
				alert("Sorry, you have errored.  You entered: " + submittedAnswer + " and I expected: " + correctAnswer); 
				gameActive = false;
				moveToNext = false;
			}
		}
		if (moveToNext == true) {
			addStep();
		}
	}
}

function incrementArray(arrayName) {
	for (i=0; i<arrayName.length; ++i) {
		arrayName[i] = parseInt(arrayName[i]) + 1;
	}
}

function addStep() {
	++stageNumber;
	document.getElementById("StageNumber").value = stageNumber;
	submittedAnswer = [];
	instructions.shift();
	randomRule = RNG(10);
	if (stageNumber<4) { randomRule = 1; }
	switch (randomRule) {
		case 9:
		case 8:
		correctAnswer.unshift(RNG(9));
		var arrayCheck = correctAnswer[0];
		console.log(arrayCheck);
		instructions[2]="Add " + colorList[arrayCheck] + " to the beginning of the list.";
		break;
		
		case 7:
		correctAnswer.reverse();
		instructions[2] = "Reverse the list.";
		break;
		
		case 6:
		do
		{
		var switch1 = RNG(9);
		var switch2 = RNG(9);
		} while (switch1 == switch2);
		for (i=0;i<correctAnswer.length;++i) {
			if (correctAnswer[i] == switch1) { correctAnswer[i] = switch2; } 
			else if (correctAnswer[i] == switch2) { correctAnswer[i] = switch1; }
		}
		instructions[2] = "Swap all " + switch1 + "s and " + switch2 + "s.";		
			
		break;
		
		default:
		correctAnswer.push(RNG(9));
		tempText = correctAnswer.length - 1;
		var arrayCheck = correctAnswer[tempText];
		instructions[2]="Add " + colorList[arrayCheck] + ".";
	}
	console.log(correctAnswer);
	document.getElementById("instructions").innerHTML = instructions[2];
}

function pressRed() {submittedAnswer.push('0'); checkCurrentAnswer();}
function pressDarkBlue() {submittedAnswer.push('1'); checkCurrentAnswer();}
function pressGreen() {submittedAnswer.push('2'); checkCurrentAnswer();}
function pressPurple() {submittedAnswer.push('3'); checkCurrentAnswer();}
function pressOrange() {submittedAnswer.push('4'); checkCurrentAnswer();}
function pressPink() {submittedAnswer.push('5'); checkCurrentAnswer();}
function pressLightBlue() {submittedAnswer.push('6'); checkCurrentAnswer();}
function pressWhite() {submittedAnswer.push('7'); checkCurrentAnswer();}
function pressBrown() {submittedAnswer.push('8'); checkCurrentAnswer();}
