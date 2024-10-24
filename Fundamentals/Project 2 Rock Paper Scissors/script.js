let playerPoint = 0;
let computerPoint = 0;
let roundCount = 0;
let roundCountDom_value = 1;

const CachedDom = () => {
    const player_RPS = document.querySelectorAll(".linkedDot");
    const rawIMG = document.querySelectorAll(".signs");
    const playerChoice = document.getElementById("PlayerChoice");
    const AiChoice = document.getElementById("AiChoice");
    const rps_Images = Array.from(rawIMG).map((element) =>
        element.getAttribute("src")
    );
    const playerSigns = Array.from(player_RPS);
    const playerScore = document.querySelector(".playerScore");
    const aiScore = document.querySelector(".aiScore");
    const referee = document.querySelector(".referee");
    const restart = document.querySelector(".restart");
    const roundCountDom = document.querySelector("#roundCount");
    // console.log(roundCountDom);

    return {
        playerChoice,
        AiChoice,
        aiScore,
        playerSigns,
        rps_Images,
        playerScore,
        referee,
        restart,
        roundCountDom
    };
};

// CachedDom()
// Get a random computer choice (rock, paper, scissors)
function getComputerChoice() {
    const { rps_Images, AiChoice } = CachedDom();
    const rps = ["rock", "paper", "scissors"];
    let computerSelection = rps[Math.floor(Math.random() * rps.length)];
    // let te = rps.indexOf(computerSelection)
    // console.log(rps_Images);
    AiChoice.setAttribute("src", rps_Images[rps.indexOf(computerSelection)]);
    return computerSelection;
}

// Play one round, compare player and computer choices
function playRound(playerSelection, computerSelection) {
    let playerScoreDom = CachedDom().playerScore;
    let aiScoreDom = CachedDom().aiScore;

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerPoint++;
        playerScoreDom.innerHTML = playerPoint;
        return "Player wins this round!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        computerPoint++;
        aiScoreDom.innerHTML = computerPoint;
        return "Computer wins this round!";
    }
}

// Handle game logic and update the round count
function handleRound(playerSelection) {
    const {roundCountDom} = CachedDom();
    if (roundCount < 4) {
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${roundCount + 1}`);
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
        console.log(result);
        console.log(
            `Player points: ${playerPoint}, Computer points: ${computerPoint}`
        );

        roundCountDom_value++;
        roundCount++;
        roundCountDom.innerText = `Round: ${roundCountDom_value}`
        // console.log(roundCountDom.innerText);
        // roundCountDom.innerText = `Round: ${roundCountDom_value}`
        
        if (roundCount === 4) {
            determineWinner();
            roundCountDom_value = 4
            roundCountDom.innerText = `Round: ${roundCountDom_value}`
            console.log(roundCountDom_value);
        }
    }

    // if(roundCountDom_value > 4) {
    // }
}

// Determine the overall winner after 5 rounds
function determineWinner() {
    let { referee, playerSigns, restart } = CachedDom();
    let refereeWords = document.createElement("p");
    referee.style.display = "block";
    referee.appendChild(refereeWords);
    if (playerPoint > computerPoint) {
        refereeWords.textContent = "YOU WIN the game!";
        console.log("YOU WIN the game!");
    } else if (playerPoint < computerPoint) {
        refereeWords.textContent = "AI WINS the game!";
        console.log("AI WINS the game!");
    } else {
        refereeWords.textContent = "The game is a DRAW!";
        console.log("The game is a DRAW!");
    }

    restart.style.display = 'block'

    playerSigns.forEach((element, index) => {
        element.style.pointerEvents = 'none';
    })
}

// Set up the game, attach event listeners for player choices
function setupGame() {
    const {roundCountDom} = CachedDom();
    console.log(roundCountDom);
    const { playerSigns, playerChoice, rps_Images, referee, AiChoice } = CachedDom();

    // if(roundCountDom_value > 4) {
    //     roundCountDom_value = 4
    // }

    playerSigns.forEach((element, index) => {
        element.addEventListener("click", () => {
            // let { referee, playerChoice, AiChoice } = CachedDom();
            let refereeWords = document.createElement("p");
            referee.style.display = "block";
            playerChoice.style.visibility = "hidden";
            AiChoice.style.visibility = "hidden";
            referee.appendChild(refereeWords);
            
            const rps = ["Rock", "Paper", "Scissors"]; // Assuming this is the array you want to loop through
            let currentIndex = 0;
            
            // Set up the interval to update refereeWords text every 100ms
            const processInterval = setInterval(() => {
                refereeWords.textContent = rps[currentIndex]; // Update the text content
                // console.log(rps[currentIndex]);
                
                currentIndex++;

                // If we've gone through all the elements of the rps array, reset the index to 0
                if (currentIndex >= rps.length) {
                    currentIndex = 0;
                }
            }, 80); // Update every 100ms
            
            // Clear the interval after 1 second (1000ms)
            setTimeout(() => {
                clearInterval(processInterval); // Stop the interval
                console.log("Interval cleared");
                refereeWords.parentNode.removeChild(refereeWords)
                referee.style.display = "none";
                playerChoice.style.visibility = "visible";
                AiChoice.style.visibility = "visible";
            }, 1000); // Clear after 1 second
            
            setTimeout(() => {
                const playerSelection = element.innerText.toLowerCase();
                playerChoice.setAttribute("src", rps_Images[index]); // Update the player choice image
                handleRound(playerSelection); // Play a round with the selected choice
                console.log('Round: '+ roundCount);
                console.log('Round Dom: '+ roundCountDom_value);
                console.log(roundCountDom);

            }, 1000);

            
        });
    });
}

// Start the game
setupGame();
