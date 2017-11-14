var choice = ["Rock", "Paper", "Scissors"]
var player = []
var comp = []

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var userChoice = 