let selectArray = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    return computerPlay selectArray[Math.floor(Math.random()*selectArray)];
}




function playRound(playerSelection, computerSelection){
  
   
    if (playerSelection == "Rock" && computerSelection == "Rock"){
        return " Tie! ";
    }
        else if (playerSelection =="Rock" && computerSelection == "Paper"){
            return " You lose! ";
        }
        else {
            return "You win!";
        }
    }

let playerSelection = "Rock";

console.log(playRound(playerSelection, computerPlay));

