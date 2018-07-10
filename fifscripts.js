var letterPool = ['O','P','P','P','Q','R','R','S','S','S','T','T','U','V','W','W','W','X','Y','Z',
					'A','A','B','B','B','C','C','C','D','D','D','E','E','F','F','G','G','H','H','H',
					'I','J','J','K','L','L','M','M','M','N','N','*','*'];
var lettersChosen = ['','A','B','C','D','E'];
var categoriesPool = ['Musical Groups','Store Names','Kitchen Utensils','Slang Words','Musical Composers','Film Characters','Novel Titles','Girl Names 8+ letters','Living Musicians','Foreign words 4+ letters','Musical Instruments','Units of Currency','Restaurants','Boy Names 3-5 Letters','Cold Things','School Supplies','Childrens Books','Scientists','Fears','Terms of Measurement','Girl Names 3-5 Letters','Board Games','Bones','4 syllable verbs','Queens','Colours','Common Street Names','Card Games','Bodies of Water','Spices/Herbs','Chores','Weapons','Methods of Transportation','Diseases','Hobbies','Vegetables','Allergens','Capitals','Body Organs','Rocks/Stones','Port Cities','Big Four Athletes','Things Coming in Pairs','9 Letter words','Heroes','Times to Give Gifts','Occupations','Black and White Things','Things in a Purse','Things You Hide','Crimes','Drinks','Things You Wear','Tools','National Leaders','Jewelry','Comedy Shows','Languages','Mythical Creatues','Flowers','4-syllable adjectives','Military Figures','Boys Names 8+ letters','Pro Sports Teams','Furniture','College/Universities','Brand Names','Titles of people','Video Games','Automotive Models','Cartoon Characters'];
var categoriesChosen = ['','Me','You','We','They','Should'];
const gridField = document.querySelector('#gameplayTable');
const scoreField = document.querySelector('#scoringTable');
const startButton = document.querySelector('#startGame');
const listCells = document.getElementsByTagName('input');
const randomSeed = document.querySelector('#seedNumber');
const countdownTimerArea = document.querySelector('#countdownTimer');
var tempNumber;
var tempLetter;
var pointTable = [[],[],[],[],[]];
var myTimer;

function countdownClock() {
	document.getElementById('countdownTimer').innerHTML='Time Remaining:  300';
	myTimer = setInterval(myClock, 1000);
	var c = 300;
	
	function myClock() {
		document.getElementById("countdownTimer").innerHTML = "Time Remaining:  ";
		document.getElementById("countdownTimer").innerHTML += --c;
		if (c == 0) {
			clearInterval(myTimer);
			alert("Time has expired");
			scoreBoard();
		}
	}
}

function chooseLetters(seed) {
	for (i = 1; i < 6; i += 1) {
		tempNumber = (Math.floor(seed*1000) % letterPool.length);
		tempLetter = letterPool.splice(tempNumber,1);
		lettersChosen[i] = tempLetter;
	}
}

function randomizeSeedGen() {
	clearInterval(myTimer);
	var seedNumber = Math.floor(Math.random()*1000000);
	randomSeed.setAttribute('value',seedNumber);
	generateBoard();
}

function chooseCategories(seed) {
	for (i = 1; i < 6; i += 1) {
		tempNumber = (Math.floor(seed*1000) % categoriesPool.length);
		tempLetter = categoriesPool.splice(tempNumber,1);
		categoriesChosen[i] = tempLetter;
	}
}

function resetCategories() {
	console.log("Resetting board");
letterPool = ['O','P','P','P','Q','R','R','S','S','S','T','T','U','V','W','W','W','X','Y','Z',
					'A','A','B','B','B','C','C','C','D','D','D','E','E','F','F','G','G','H','H','H',
					'I','J','J','K','L','L','M','M','M','N','N','*','*'];
lettersChosen = ['','A','B','C','D','E'];
categoriesPool = ['Musical Groups','Store Names','Kitchen Utensils','Slang Words','Musical Composers','Film Characters','Novel Titles','Girl Names 8+ letters','Living Musicians','Foreign words 4+ letters','Musical Instruments','Units of Currency','Restaurants','Boy Names 3-5 Letters','Cold Things','School Supplies','Childrens Books','Scientists','Fears','Terms of Measurement','Girl Names 3-5 Letters','Board Games','Bones','4 syllable verbs','Queens','Colours','Common Street Names','Card Games','Bodies of Water','Spices/Herbs','Chores','Weapons','Methods of Transportation','Diseases','Hobbies','Vegetables','Allergens','Capitals','Body Organs','Rocks/Stones','Port Cities','Big Four Athletes','Things Coming in Pairs','9 Letter words','Heroes','Times to Give Gifts','Occupations','Black and White Things','Things in a Purse','Things You Hide','Crimes','Drinks','Things You Wear','Tools','National Leaders','Jewelry','Comedy Shows','Languages','Mythical Creatues','Flowers','4-syllable adjectives','Military Figures','Boys Names 8+ letters','Pro Sports Teams','Furniture','College/Universities','Brand Names','Titles of people','Video Games','Automotive Models','Cartoon Characters'];
categoriesChosen = ['','Me','You','We','They','Should'];
}


function generateBoard() {
	clearInterval(myTimer);
    countdownClock();
	var timeup = 300000;
	var seed = randomSeed.value;
	chooseLetters(seed);
	chooseCategories(seed);
	startButton.value = "Generated!";
	var buildData = "";
	buildData += "<table class='genboard'><tr>"
	for (var j=0 ; j < 6; j +=1) {
		buildData += "<td width='16%'>" + lettersChosen[j] + "</td>";
	}
	for (var i=1; i<6; i +=1) {
		buildData += "</tr><tr><td>" + categoriesChosen[i];
		for (var j=1 ; j<6 ; j+=1) {
			buildData += "<td><input type='text' id='cell" + j + i + "'></td>";
		}
	}
	buildData += "</table>";
	gridField.innerHTML = buildData;
	for (i=0;i<listCells.length; i+=1) {
		listCells[i].addEventListener('change', (event) => {
			if(event.target.value != "") {
			event.target.parentNode.setAttribute('bgColor','green');
			} else
			{
				event.target.parentNode.setAttribute('bgColor','black');
			}
		});
	}
}

function scoreBoard() {
	clearInterval(myTimer);
	var counter = 2;
	var depthScore = 0;
	var bredthScore = 0;
	var totalScore = 0;
	for (i = 0; i < 5; i+=1) {
		for (j=0;j<5;j+=1) {
			counter += 1;
			if (listCells[counter].value == "") {
				pointTable[i][j] = 0;
			} else {
				pointTable[i][j] = 1;
			}
		}
	}
	
	//print Depth Score
	var depthScores = [];
	var bredthScores = [];
	for (i=0;i<5;i+=1){
		depthScores[i] = 0;
		for (j=0;j<5;j+=1) {
			depthScores[i] += pointTable[i][j];
		}
	}

	var buildData = "<div display:'inline-block'>";
	buildData += "<div class='column'><table>"
	for (var j=0 ; j < 5; j +=1) {
		buildData += "<tr><td>" + categoriesChosen[j+1] + "</td><td>" + (depthScores[j]*depthScores[j]) + "</td></tr>";
		depthScore += depthScores[j] * depthScores[j];
	}
	
	buildData += "<tr bgcolor='#222'><td>DEPTH SCORE:</td><td>" + depthScore + "</td></tr></table>";
	
	//print Breath Score
		for (i=0;i<5;i+=1){
		bredthScores[i] = 0;
		for (j=0;j<5;j+=1) {
			bredthScores[i] += pointTable[i][j];
		}
	}
	
	buildData += "</div><div class='column'><table>"
	for (var j=0 ; j < 5; j +=1) {
		console.log(bredthScores);
		perCategory = 0;
		for (var i=0; i<5; i +=1) {
			if (bredthScores[i] > 0) {
				perCategory += 1;
				bredthScores[i] += -1;
			}
		}
		buildData += "<tr><td>" + (j+1) + " of all categories</td><td>" + (perCategory*perCategory) + "</td></tr>";
		bredthScore += (perCategory*perCategory);
	}
	
	buildData += "<tr bgcolor='#222'><td>BREDTH SCORE:</td><td>" + bredthScore + "</td></tr>";
	
	//print Total Score
	var totalScore = bredthScore + depthScore;
	buildData += "<tr bgcolor='#444'><td>FINAL SCORE:</td><td>" + totalScore + "</td></tr></table></div></div>";
	scoreField.innerHTML = buildData;
	
}