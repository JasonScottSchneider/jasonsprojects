var xScore=0
var oScore=0

var currentPlayer = "O";
var won = false;

function place(box) {
	gameStatus();
	if(box.innerText != "" || won) return;
	box.innerText = currentPlayer;
	//window.alert(box.innerText);
	checkGameBoard();
	if(currentPlayer == "O") {
		 return computerPlayer();
	}
	else {
		currentPlayer = "O";
	}
}
function checkGameBoard() {
	for(var i = 0; i <= 2; i++) {
		checkWinner(document.getElementById(i + "_0").innerText,
					document.getElementById(i + "_1").innerText,
					document.getElementById(i + "_2").innerText);
		checkWinner(document.getElementById("0_" + i).innerText,
					document.getElementById("1_" + i).innerText,
					document.getElementById("2_" + i).innerText);
	}
		checkWinner(document.getElementById("0_0").innerText,
				document.getElementById("1_1").innerText,
				document.getElementById("2_2").innerText);
		checkWinner(document.getElementById("0_2").innerText,
				document.getElementById("1_1").innerText,
				document.getElementById("2_0").innerText);
}

function checkWinner(first, second, third){
	if(first != "" && first == second && first == third){
		alert(currentPlayer + " is the winner! Long live the Empire and the First Order!");
		won = true;
		return keepScore();
		}
}

function keepScore() {
	if(won === true) {
		if(currentPlayer=="O") {
			//var oScore = document.getElementById("oScore").value;
			oScore=oScore+1;
			document.getElementById("oScore").innerHTML=oScore;
		} else {
			//var xScore = document.getElementById("xScore").value;
			xScore=xScore+1;
			document.getElementById("xScore").innerHTML=xScore;
		}
	}
	refresh();
}

function refresh() {
			sleep(1000);
			document.getElementById("0_0").innerText=""; 
			document.getElementById("0_1").innerText="";
			document.getElementById("0_2").innerText="";
			document.getElementById("1_0").innerText="";
			document.getElementById("1_1").innerText="";
			document.getElementById("1_2").innerText="";
			document.getElementById("2_0").innerText="";
			document.getElementById("2_1").innerText="";
			document.getElementById("2_2").innerText="";
			won = false;
}

function gameStatus(){
	if(document.getElementById("0_0").innerText!="" && document.getElementById("0_1").innerText!="" && document.getElementById("0_2").innerText!="" && document.getElementById("1_0").innerText!="" && document.getElementById("1_1").innerText!="" && document.getElementById("1_2").innerText!="" && document.getElementById("2_0").innerText!="" && document.getElementById("2_1").innerText!="" && document.getElementById("2_2").innerText!="" && won != true) {
		window.alert("Draw. " + " " + currentPlayer + " was the last player.");
		refresh();
	}
}

function computerPlayer() {
	currentPlayer = "X";
	var k = false;
	while(k !== true) {
		min = Math.ceil(0);
		max = Math.floor(3);
		var x = Math.floor(Math.random() * (max - min)) + min;
		var y = Math.floor(Math.random() * (max - min)) + min;
		var xy = x + "_" + y;
		//window.alert(xy);
		var move = document.getElementById(xy).innerText;
		var target = document.getElementById(xy);
		//if we wanted to return the id, not the innerText, execute code below.
		//var x = document.getElementsByClassName("row").id;
		if(move === "") {
			target.click();
			k=true;
		}
	}
}

//setTimeout(function {some-function()}, however-many-milliseconds);
//setTimeout will delay a process but other processes will continue, skipping the process under setTimeout. sleep() is a function not inherent in Javascript like it is in Python, but this works the same as in Python.
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
