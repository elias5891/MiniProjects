var wordPool = ['AFRICA', 'AGENT', 'AIR', 'ALIEN', 'ALPS', 'AMAZON', 'AMBULANCE', 'AMERICA', 'ANGEL', 'ANTARCTICA', 'APPLE', 'ARM', 'ATLANTIS', 'AUSTRALIA', 'AZTEC', 'BACK', 'BALL', 'BAND', 'BANK', 'BAR', 'BARK', 'BAT', 'BATTERY', 'BEACH', 'BEAR', 'BEAT', 'BED', 'BEIJING', 'BELL', 'BELT', 'BERLIN', 'BERMUDA', 'BERRY', 'BILL', 'BLOCK', 'BOARD', 'BOLT', 'BOMB', 'BOND', 'BOOM', 'BOOT', 'BOTTLE', 'BOW', 'BOX', 'BRIDGE', 'BRUSH', 'BUCK', 'BUFFALO', 'BUG', 'BUGLE', 'BUTTON', 'CALF', 'CANADA', 'CAP', 'CAPITAL', 'CAR', 'CARD', 'CARROT', 'CASINO', 'CAST', 'CAT', 'CELL', 'CENTAUR', 'CENTER', 'CHAIR', 'CHANGE', 'CHARGE', 'CHECK', 'CHEST', 'CHICK', 'CHINA', 'CHOCOLATE', 'CHURCH', 'CIRCLE', 'CLIFF', 'CLOAK', 'CLUB', 'CODE', 'COLD', 'COMIC', 'COMPOUND', 'CONCERT', 'CONDUCTOR', 'CONTRACT', 'COOK', 'COPPER', 'COTTON', 'COURT', 'COVER', 'CRAFT', 'CRANE', 'CRASH', 'CRICKET', 'CROSS', 'CROWN', 'CYCLE', 'CZECH', 'DANCE', 'DATE', 'DAY', 'DEATH', 'DECK', 'DEGREE', 'DIAMOND', 'DICE', 'DINOSAUR', 'DISEASE', 'DOCTOR', 'DOG', 'DRAFT', 'DRAGON', 'DRESS', 'DRESS', 'DRILL', 'DROP', 'DUCK', 'DWARF', 'EAGLE', 'EGYPT', 'EMBASSY', 'ENGINE', 'ENGLAND', 'EUROPE', 'EYE', 'FACE', 'FAIR', 'FALL', 'FAN', 'FENCE', 'FIELD', 'FIGHTER', 'FIGURE', 'FILE', 'FILM', 'FIRE', 'FISH', 'FLUTE', 'FLY', 'FOOT', 'FORCE', 'FOREST', 'FORK', 'FRANCE', 'GAME', 'GAS', 'GENIUS', 'GERMANY', 'GHOST', 'GIANT', 'GLASS', 'GLOVE', 'GOLD', 'GRACE', 'GRASS', 'GREECE', 'GREEN', 'GROUND', 'HAM', 'HAND', 'HAWK', 'HEAD', 'HEART', 'HELICOPTER', 'HIMALAYAS', 'HOLE', 'HOLLYWOOD', 'HONEY', 'HOOD', 'HOOK', 'HORN', 'HORSE', 'HORSESHOE', 'HOSPITAL', 'HOTEL', 'ICE', 'ICE CREAM', 'INDIA', 'IRON', 'IVORY', 'JACK', 'JAM', 'JET', 'JUPITER', 'KANGAROO', 'KETCHUP', 'KEY', 'KID', 'KING', 'KIWI', 'KNIFE', 'KNIGHT', 'LAB', 'LAP', 'LASER', 'LAWYER', 'LEAD', 'LEMON', 'LEPRECHAUN', 'LIFE', 'LIGHT', 'LIMOUSINE', 'LINE', 'LINK', 'LION', 'LITTER', 'LOCH NESS', 'LOCK', 'LOG', 'LONDON', 'LUCK', 'MAIL', 'MAMMOTH', 'MAPLE', 'MARBLE', 'MARCH', 'MASS', 'MATCH', 'MERCURY', 'MEXICO', 'MICROSCOPE', 'MILLIONAIRE', 'MINE', 'MINT', 'MISSILE', 'MODEL', 'MOLE', 'MOON', 'MOSCOW', 'MOUNT', 'MOUSE', 'MOUTH', 'MUG', 'NAIL', 'NEEDLE', 'NET', 'NEW YORK', 'NIGHT', 'NINJA', 'NOTE', 'NOVEL', 'NURSE', 'NUT', 'OCTOPUS', 'OIL', 'OLIVE', 'OLYMPUS', 'OPERA', 'ORANGE', 'ORGAN', 'PALM', 'PAN', 'PANTS', 'PAPER', 'PARACHUTE', 'PARK', 'PART', 'PASS', 'PASTE', 'PENGUIN', 'PEW', 'PHOENIX', 'PIANO', 'PIE', 'PILOT', 'PIN', 'PIPE', 'PIRATE', 'PISTOL', 'PIT', 'PITCH', 'PLANE', 'PLASTIC', 'PLATE', 'PLATYPUS', 'PLAY', 'PLOT', 'POINT', 'POISON', 'POLE', 'POLICE', 'POOL', 'PORT', 'POST', 'POUND', 'PRESS', 'PRINCESS', 'PUMPKIN', 'PUPIL', 'PYRAMID', 'QUEEN', 'RABBIT', 'RACKET', 'RAY', 'REVOLUTION', 'RING', 'ROBIN', 'ROBOT', 'ROCK', 'ROME', 'ROOT', 'ROSE', 'ROULETTE', 'ROUND', 'ROW', 'RULER', 'SADDLE', 'SATELLITE', 'SATURN', 'SCALE', 'SCHOOL', 'SCIENTIST', 'SCORPION', 'SCREEN', 'SCUBA DIVER', 'SEAL', 'SERVER', 'SHADOW', 'SHAKESPEARE', 'SHARK', 'SHIP', 'SHOE', 'SHOP', 'SHOT', 'SINK', 'SKATES','SKYSCRAPER', 'SLIP', 'SLUG', 'SMUGGLER', 'SNOW', 'SNOWMAN', 'SOCK', 'SOLDIER', 'SOUL', 'SOUND', 'SPACE', 'SPELL', 'SPIDER', 'SPIKE', 'SPINE', 'SPOT', 'SPRING', 'SPY', 'SQUARE', 'STADIUM', 'STAFF', 'STAR', 'STATE', 'STICK', 'STOCK', 'STRAW', 'STREAM', 'STRIKE', 'STRING', 'SUB', 'SUIT', 'SUPERHERO', 'SWING', 'SWITCH', 'TABLE', 'TABLET', 'TAG', 'TAIL', 'TAP', 'TEACHER', 'TELESCOPE', 'TEMPLE', 'THEATER', 'THIEF', 'THUMB', 'TICK', 'TIE', 'TIME', 'TOKYO', 'TOOTH', 'TORCH', 'TOWER', 'TRACK', 'TRAIN', 'TRIANGLE', 'TRIP', 'TRUNK', 'TUBE', 'TURKEY', 'UNDERTAKER', 'UNICORN', 'VACUUM', 'VAN', 'VET', 'WAKE', 'WALL', 'WAR', 'WASHER', 'WASHINGTON', 'WATCH', 'WATER', 'WAVE', 'WEB', 'WELL', 'WHALE', 'WHIP', 'WIND', 'WITCH', 'WORM', 'YARD', 'ADD', 'AISLE', 'ANT', 'BAG', 'BASE', 'CART', 'CAFE', 'CLUE','NERVE','VIKING','PATIENT','QUARTER','CROW','MICROWAVE','BREAK','RUBBER','MOSES','SECOND','TASTE','CANE','ROLL','RAIL','POTTER','PURSE','TUNNEL','MISS','ROAD','THUNDER','STICKER'];
var keyPool = [ 0,0,0,0,0,1,2,2,2,3,4,5,6,7,7,7,7,7,8,8,8,8,8,8,8];

var seed = 5891;
var agentCount = 15;
var turnCount = 10;
var strikeCount = 0;
var playerTurn = 1;
var playerValue = 1;
var wordBoard = [ [],[],[],[],[] ];
var keyBoard = [  [],[],[],[],[] ];
const keyGridField = document.querySelector('#keyWordTable');
const scoreBoardSpot = document.querySelector('#countdownTimer');
const listCells = document.getElementsByTagName('input');

function generateBoard() {
	seed = seedNumber.value;
	chooseWords(seed);
	chooseKeys(seed);
	buildkeyBoard();
}

/* 
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
 */


function chooseWords(seed) {
	for (i = 0; i < 5; i += 1) {
		for (j = 0; j < 5; j += 1) {
			tempNumber = (Math.floor(seed*1000) % wordPool.length);
			tempWord = wordPool.splice(tempNumber,1);
			wordBoard[i][j] = tempWord;
		}
	}
}

function chooseKeys(seed) {
	for (i = 0; i < 5; i += 1) {
		for (j = 0; j < 5; j += 1) {
			tempNumber = (Math.floor(seed*1000) % keyPool.length);
			tempWord = keyPool.splice(tempNumber,1);
			keyBoard[i][j] = tempWord;
		}
	}
}

function buildkeyBoard() {
	var buildData = "";
	buildData += "<table class='keyBoardTable'><tr>"
	for (var i=0;i<5;i+=1) {
		for (var j=0;j<5;j+=1) {
			console.log(i + " " + j + " are i&j.  PlayerTurn is " + playerTurn);
			buildData += "<td id='Square";
			 buildData += i;
			 buildData += j;
			buildData += "'>";
			//buildData += "<td class='square'>";
			playerTurn = document.querySelector('input[name="playerValue"]:checked').value;
			playerValue = playerTurn;
			if (playerTurn==1) {
				var keyValue = keyBoard[i][j];
				switch (keyValue[0]) {
					case 0:
					case 1:
					case 2:
						buildData += "<input type='button' class='greenButton' value='";
						break;

					case 3:
					case 4:
					case 5:
						buildData += "<input type='button' class='blackButton' value='";
						break;

					case 7:
					case 6:
					case 8:
						buildData += "<input type='button' class='tanButton' value='";
						break;
											
					default:
					break;
				
				}
			} else {
				var keyValue = keyBoard[i][j];
				switch (keyValue[0]) {
					case 2:
					case 3:
					case 7:
						buildData += "<input type='button' class='greenButton' value='";
						break;

					case 1:
					case 4:
					case 6:
						buildData += "<input type='button' class='blackButton' value='";
						break;

					case 0:
					case 5:
					case 8:
						buildData += "<input type='button' class='tanButton' value='";
						break;
											
					default:
					break;
				}
			}
				
			buildData += wordBoard[i][j];
			buildData += "' id=button"
			buildData += i;
			buildData += j;
			buildData += ">";
			buildData += "</td>";
		}
		buildData += "<tr>";
	}
	buildData += "</table>"
	keyGridField.innerHTML = buildData;
	scoreBoardSpot.innerHTML = '<table><td id="playerTurn" width="25%"><input type="button" class="playerButton activePlayerButton" value="Player One" onClick=changePlayerOne()><input type="button" class="playerButton" value="Player Two" onClick=changePlayerTwo()><td id="agentCount" width="25%">Remaining Agents: ' + agentCount +'<td id="turnCount" width="25%">Remaining Turns: ' + turnCount + ' <td id="strikeCount" width="25%">Strikes Earned: ' + strikeCount + ' </table>';
	playerTurn = 1;
	
	for (i=0;i<listCells.length;i+=1) {
		listCells[i].addEventListener('click', (event) => {
			var a = event.target.id.substring(6);
			var b = a.substring(1);
			a = a.substring(0,1);
			var answerValue = keyBoard[a][b][0];
			console.log(answerValue);
			if (playerTurn == 1) {
				switch (answerValue) {
					case 2:
					case 3:
					case 7:
					event.target.parentNode.setAttribute('bgColor','green');
					agentCount -= 1;
					break;
					
					case 5:
					case 0:
					case 8:
					 console.log(event.target.parentNode.getAttribute('bgColor'));
					if ((playerValue == playerTurn) || (event.target.parentNode.getAttribute('bgColor')=='tan'))
					{
					event.target.parentNode.setAttribute('bgColor','tan');
					} else {
						event.target.parentNode.setAttribute('bgColor','gray');
					}
					strikeCount += 1;
					break;
					
					case 1:
					case 4:
					case 6:
					event.target.parentNode.setAttribute('bgColor','red');
					break;
					
					default:
					break;
				}
					
			} else {
				switch (answerValue) {
					case 0:
					case 1:
					case 2:
					event.target.parentNode.setAttribute('bgColor','green');
					agentCount -= 1;
					break;
					
					case 6:
					case 7:
					case 8:
					 console.log(event.target.parentNode.getAttribute('bgColor'));
					if ((playerValue == playerTurn) || (event.target.parentNode.getAttribute('bgColor')=='tan'))
					{
					event.target.parentNode.setAttribute('bgColor','tan');
					} else {
						event.target.parentNode.setAttribute('bgColor','gray');
					}
					strikeCount += 1;
					break;
					
					case 4:
					case 3:
					case 5:
					event.target.parentNode.setAttribute('bgColor','red');
					break;
				}
			}

			if (playerTurn==1) {
			scoreBoardSpot.innerHTML = '<table><td id="playerTurn" width="25%"><input type="button" class="playerButton activePlayerButton" value="Player One" onClick=changePlayerOne()><input type="button" class="playerButton" value="Player Two" onClick=changePlayerTwo()><td id="agentCount" width="25%">Remaining Agents: ' + agentCount +'<td id="turnCount" width="25%">Remaining Turns: ' + turnCount + ' <td id="strikeCount" width="25%">Strikes Earned: ' + strikeCount + ' </table>';
			} else {
							scoreBoardSpot.innerHTML = '<table><td id="playerTurn" width="25%"><input type="button" class="playerButton " value="Player One" onClick=changePlayerOne()><input type="button" class="playerButton activePlayerButton" value="Player Two" onClick=changePlayerTwo()><td id="agentCount" width="25%">Remaining Agents: ' + agentCount +'<td id="turnCount" width="25%">Remaining Turns: ' + turnCount + ' <td id="strikeCount" width="25%">Strikes Earned: ' + strikeCount + ' </table>';
			}
		});
	}
}

function changePlayerTwo() {
		playerTurn = 2;
		turnCount -= 1;
	scoreBoardSpot.innerHTML = '<table><td id="playerTurn" width="25%"><input type="button" class="playerButton" value="Player One" onClick=changePlayerOne()><input type="button" class="playerButton activePlayerButton" value="Player Two" onClick=changePlayerTwo()><td id="agentCount" width="25%">Remaining Agents: ' + agentCount +'<td id="turnCount" width="25%">Remaining Turns: ' + turnCount + ' <td id="strikeCount" width="25%">Strikes Earned: ' + strikeCount + ' </table>';
}

function changePlayerOne() {
		playerTurn = 1;
		turnCount -= 1;
	scoreBoardSpot.innerHTML = '<table><td id="playerTurn" width="25%"><input type="button" class="playerButton activePlayerButton" value="Player One" onClick=changePlayerOne()><input type="button" class="playerButton" value="Player Two" onClick=changePlayerTwo()><td id="agentCount" width="25%">Remaining Agents: ' + agentCount +'<td id="turnCount" width="25%">Remaining Turns: ' + turnCount + ' <td id="strikeCount" width="25%">Strikes Earned: ' + strikeCount + ' </table>';
}


// var letterPool = ['O','P','P','P','Q','R','R','S','S','S','T','T','U','V','W','W','W','X','Y','Z',
					// 'A','A','B','B','B','C','C','C','D','D','D','E','E','F','F','G','G','H','H','H',
					// 'I','J','J','K','L','L','M','M','M','N','N','*','*'];
// var lettersChosen = ['','A','B','C','D','E'];
// var categoriesPool = ['Musical Groups','Store Names','Kitchen Utensils','Slang Words','Musical Composers','Film Characters','Novel Titles','Girl Names 8+ letters','Living Musicians','Foreign words 4+ letters','Musical Instruments','Units of Currency','Restaurants','Boy Names 3-5 Letters','Cold Things','School Supplies','Childrens Books','Scientists','Fears','Terms of Measurement','Girl Names 3-5 Letters','Board Games','Bones','4 syllable verbs','Queens','Colours','Common Street Names','Card Games','Bodies of Water','Spices/Herbs','Chores','Weapons','Methods of Transportation','Diseases','Hobbies','Vegetables','Allergens','Capitals','Body Organs','Rocks/Stones','Port Cities','Big Four Athletes','Things Coming in Pairs','9 Letter words','Heroes','Times to Give Gifts','Occupations','Black and White Things','Things in a Purse','Things You Hide','Crimes','Drinks','Things You Wear','Tools','National Leaders','Jewelry','Comedy Shows','Languages','Mythical Creatues','Flowers','4-syllable adjectives','Military Figures','Boys Names 8+ letters','Pro Sports Teams','Furniture','College/Universities','Brand Names','Titles of people','Video Games','Automotive Models','Cartoon Characters'];
// var categoriesChosen = ['','Me','You','We','They','Should'];
// const gridField = document.querySelector('#gameplayTable');
// const scoreField = document.querySelector('#scoringTable');
// const startButton = document.querySelector('#startGame');
// const listCells = document.getElementsByTagName('input');
// const randomSeed = document.querySelector('#seedNumber');
// const countdownTimerArea = document.querySelector('#countdownTimer');
// var tempNumber;
// var tempLetter;
// var pointTable = [[],[],[],[],[]];
// var myTimer;

// function countdownClock() {
	// document.getElementById('countdownTimer').innerHTML='Time Remaining:  300';
	// myTimer = setInterval(myClock, 1000);
	// var c = 300;
	
	// function myClock() {
		// document.getElementById("countdownTimer").innerHTML = "Time Remaining:  ";
		// document.getElementById("countdownTimer").innerHTML += --c;
		// if (c == 0) {
			// clearInterval(myTimer);
			// alert("Time has expired");
			// scoreBoard();
		// }
	// }
// }

// function chooseLetters(seed) {
	// for (i = 1; i < 6; i += 1) {
		// tempNumber = (Math.floor(seed*1000) % letterPool.length);
		// tempLetter = letterPool.splice(tempNumber,1);
		// lettersChosen[i] = tempLetter;
	// }
// }

// function randomizeSeedGen() {
	// clearInterval(myTimer);
	// var seedNumber = Math.floor(Math.random()*1000000);
	// randomSeed.setAttribute('value',seedNumber);
	// generateBoard();
// }



// function resetCategories() {
	// console.log("Resetting board");
// letterPool = ['O','P','P','P','Q','R','R','S','S','S','T','T','U','V','W','W','W','X','Y','Z',
					// 'A','A','B','B','B','C','C','C','D','D','D','E','E','F','F','G','G','H','H','H',
					// 'I','J','J','K','L','L','M','M','M','N','N','*','*'];
// lettersChosen = ['','A','B','C','D','E'];
// categoriesPool = ['Musical Groups','Store Names','Kitchen Utensils','Slang Words','Musical Composers','Film Characters','Novel Titles','Girl Names 8+ letters','Living Musicians','Foreign words 4+ letters','Musical Instruments','Units of Currency','Restaurants','Boy Names 3-5 Letters','Cold Things','School Supplies','Childrens Books','Scientists','Fears','Terms of Measurement','Girl Names 3-5 Letters','Board Games','Bones','4 syllable verbs','Queens','Colours','Common Street Names','Card Games','Bodies of Water','Spices/Herbs','Chores','Weapons','Methods of Transportation','Diseases','Hobbies','Vegetables','Allergens','Capitals','Body Organs','Rocks/Stones','Port Cities','Big Four Athletes','Things Coming in Pairs','9 Letter words','Heroes','Times to Give Gifts','Occupations','Black and White Things','Things in a Purse','Things You Hide','Crimes','Drinks','Things You Wear','Tools','National Leaders','Jewelry','Comedy Shows','Languages','Mythical Creatues','Flowers','4-syllable adjectives','Military Figures','Boys Names 8+ letters','Pro Sports Teams','Furniture','College/Universities','Brand Names','Titles of people','Video Games','Automotive Models','Cartoon Characters'];
// categoriesChosen = ['','Me','You','We','They','Should'];
// }




// function scoreBoard() {
	// clearInterval(myTimer);
	// var counter = 2;
	// var depthScore = 0;
	// var bredthScore = 0;
	// var totalScore = 0;
	// for (i = 0; i < 5; i+=1) {
		// for (j=0;j<5;j+=1) {
			// counter += 1;
			// if (listCells[counter].value == "") {
				// pointTable[i][j] = 0;
			// } else {
				// pointTable[i][j] = 1;
			// }
		// }
	// }
	
	// //print Depth Score
	// var depthScores = [];
	// var bredthScores = [];
	// for (i=0;i<5;i+=1){
		// depthScores[i] = 0;
		// for (j=0;j<5;j+=1) {
			// depthScores[i] += pointTable[i][j];
		// }
	// }

	// var buildData = "<div display:'inline-block'>";
	// buildData += "<div class='column'><table>"
	// for (var j=0 ; j < 5; j +=1) {
		// buildData += "<tr><td>" + categoriesChosen[j+1] + "</td><td>" + (depthScores[j]*depthScores[j]) + "</td></tr>";
		// depthScore += depthScores[j] * depthScores[j];
	// }
	
	// buildData += "<tr bgcolor='#222'><td>DEPTH SCORE:</td><td>" + depthScore + "</td></tr></table>";
	
	// //print Breath Score
		// for (i=0;i<5;i+=1){
		// bredthScores[i] = 0;
		// for (j=0;j<5;j+=1) {
			// bredthScores[i] += pointTable[i][j];
		// }
	// }
	
	// buildData += "</div><div class='column'><table>"
	// for (var j=0 ; j < 5; j +=1) {
		// console.log(bredthScores);
		// perCategory = 0;
		// for (var i=0; i<5; i +=1) {
			// if (bredthScores[i] > 0) {
				// perCategory += 1;
				// bredthScores[i] += -1;
			// }
		// }
		// buildData += "<tr><td>" + (j+1) + " of all categories</td><td>" + (perCategory*perCategory) + "</td></tr>";
		// bredthScore += (perCategory*perCategory);
	// }
	
	// buildData += "<tr bgcolor='#222'><td>BREDTH SCORE:</td><td>" + bredthScore + "</td></tr>";
	
	// //print Total Score
	// var totalScore = bredthScore + depthScore;
	// buildData += "<tr bgcolor='#444'><td>FINAL SCORE:</td><td>" + totalScore + "</td></tr></table></div></div>";
	// scoreField.innerHTML = buildData;
	
// }