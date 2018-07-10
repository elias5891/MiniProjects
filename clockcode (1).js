var myTimer;
var color = [];
var tempColor;
var tableLocation;
var tempTextTable;
var tableTens;
var tableOnes;
var cellToGrab;

function startClock() {
	clearInterval(myTimer);
	makeTable();
	myTimer = setInterval(myClock,10)
	var hundreths = 0;
	var tenths = 0;
	var seconds = 0;
	var minutes = 0;
	var tempText;
	function myClock() {
		++hundreths;
		if (hundreths == 10) {
			hundreths -= 10;
			tenths += 1;
		}
		if (tenths == 10) {
			tenths -= 10;
			seconds += 1;
			for (var i=0; i<3; i+=1)
				color[i] = RNG();
				tempColor = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
			document.getElementById("RING").style.color = tempColor;
			tableTens = Math.floor(seconds/10);
			if (tableTens == 6) { tableTens = 0; }
			tableOnes = seconds % 10;
			cellToGrab = "cell" + tableTens + tableOnes;
			document.getElementById(cellToGrab).style.color = tempColor;
			document.getElementById(cellToGrab).innerHTML = tempColor;
			tableTens = (tableTens + 1) % 6;
			cellToGrab = "cell" + tableTens + tableOnes;
			document.getElementById(cellToGrab).innerHTML = '-';
		}
		if (seconds == 60) {
			seconds -= 60;
			minutes += 1;
		}
		if (seconds < 10) {
			tempText = " " + minutes + ":0" + seconds + "." + tenths + hundreths;
		} else {
		tempText = " " + minutes + ":" + seconds + "." + tenths + hundreths;
		}
		document.getElementById("RING").innerHTML = tempText;
	}
}

function stopClock() {
	clearInterval(myTimer);
}

function RNG() {
	return Math.floor(Math.random()*256);
}

function makeTable() {
	tableLocation = document.getElementById("colorTable");
	tempTextTable = "<table border='1' class='colorLookup' width=80%><tr><td width=12%>";
	for (var i=0; i<6; i+=1) {
		tempTextTable += "<td width=12%>" + i + "-</td>";
	}
	for (var i=0;i<10;i+=1) {
		tempTextTable += "</tr><tr><td>-" + i;
		for (var j=0; j<6; j+=1) {
			tempTextTable += "<td id='cell" + j + i + "'>-</td>";
		}
	}
	tempTextTable += "</table>";
	tableLocation.innerHTML = tempTextTable;
}