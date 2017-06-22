// Rock, Paper, Scissors Game

// Need to add scoring and score tracking.
// var yourScore = 0;
// var compScore = 0;
// var winScore = 5;
var yourAnswer = prompt("Rock, Paper or Scissors?");
var compAnswer = 0;
var compChoice = Math.floor(Math.random() * 100);
if ( compChoice <= 33 ) {
	compAnswer = "Rock";
} 
else if ( compChoice <= 66 ) {
	compAnswer = "Paper";
}
else {
	compAnswer = "Scissors"
}
alert( "Computer picked" + compAnswer + ".");
document.getElementById("comp_answer").innerHTML = compAnswer;
if ( yourAnswer == compAnswer ) {
	alert("You both picked " + "yourAnswer" + ". No points to either player.");
}
else if ( yourAnswer == "Rock" ) {
	if ( compAnswer == "Paper" ) {
		alert("Paper covers Rock. Computer wins!");
	}
	else ( compAnswer == "Scissors" ) {
		alert("Rock smashes Scissors. You win!");
	}
}
else if ( yourAnswer == "Paper" ) {
	if ( compAnswer == "Rock" ) {	
		alert("Paper covers Rock. You win!");
	}
	else ( compAnswer == "Scissors" ) {
		alert("Scissors cut Paper. Computer wins!");
	}
}
else ( yourAnswer == "Scissors" ) {
	if ( compAnswer == "Rock") {
		alert("Rock smashes Scissors. Computer wins!");
	}
	else ( compAnswer == "Paper") {
		alert("Scissors cut Paper. You win!")
	}
}