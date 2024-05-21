// let playerPoint = 0;
// let computerPoint = 0;

// function getComputerChoice() {
//     const rps = ["Rock", "Paper", "Scissors"];
//     let selection = rps[Math.floor(Math.random() * rps.length)].toLowerCase();
//     return selection;
// }



    
//     playGame()
//     function playGame() {
//         for (let i = 0; i < 5; i++) {
//             console.log(i+1);
//             const playerSelection = prompt("Make a choice");
//             const computerSelection = getComputerChoice();
//             console.log(playRound(playerSelection, computerSelection));
//             function playRound(playerSelection, computerSelection) {
//                 playerSelection = playerSelection.toLowerCase();
//                 computerSelection = computerSelection.toLowerCase();
                
//                 // if (playerSelection == computerSelection) {
//                 //     console.log(`playerSelection: ${playerSelection}`);
//                 //     console.log(`computerSelection: ${computerSelection}`);
//                 //     return "Tie";
//                 // }
                
                
//                 if (
//                     (playerSelection === "rock" && computerSelection === "scissors") ||
//                     (playerSelection === "paper" && computerSelection === "rock") ||
//                     (playerSelection === "scissors" && computerSelection === "paper")
//                 ) {
//                     console.log(`playerSelection: ${playerSelection}`);
//                     console.log(`computerSelection: ${computerSelection}`);
//                     playerPoint++
//                     console.log(`playerPoint ${playerPoint}`);
//                     return "Player wins This Round";
//                 } else if (playerSelection == computerSelection) {
//                     console.log(`playerSelection: ${playerSelection}`);
//                     console.log(`computerSelection: ${computerSelection}`);
//                     return "Tie"
//                 }
//                 else {
//                     console.log(`playerSelection: ${playerSelection}`);
//                     console.log(`computerSelection: ${computerSelection}`);
//                     computerPoint++
//                     console.log(`computerPoint: ${computerPoint}`);
//                     return "Computer wins Round";
//                 }
//             }
            
//         }

//         if (playerPoint > computerPoint) {
//             console.log("YOU WIN");   
//         } else if (playerPoint < computerPoint) {
//             console.log("YOU LOSE");
//         }   else {
//             console.log("DRAW");
//         }
//     }