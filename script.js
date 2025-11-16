        let playerScore = 0;
        let computerScore = 0;
        let drawScore = 0;

        function playGame(playerChoice) {
            const choices = ["rock", "paper", "scissors"];
            const computerChoice = choices[Math.floor(Math.random() * 3)];

            const resultEl = document.getElementById("result");
            const choicesEl = document.getElementById("choices");

            // Show choices
            choicesEl.innerHTML = `
                You chose: <span class="highlight">${playerChoice}</span> <br>
                Computer chose: <span class="highlight">${computerChoice}</span>
            `;

            let result = "";

            if (playerChoice === computerChoice) {
                result = "<span class='draw'>It's a Draw!</span>";
                drawScore++;
            }
            else if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
            ) {
                result = "<span class='highlight'>You Win! 🎉</span>";
                playerScore++;
            }
            else {
                result = "<span class='lose'>You Lose 😢</span>";
                computerScore++;
            }

            // Update scoreboard
            document.getElementById("playerScore").textContent = playerScore;
            document.getElementById("computerScore").textContent = computerScore;
            document.getElementById("drawScore").textContent = drawScore;

            // Add shake animation
            resultEl.classList.remove("shake");
            void resultEl.offsetWidth;
            resultEl.classList.add("shake");

            resultEl.innerHTML = result;
        }

        function resetGame() {
            playerScore = 0;
            computerScore = 0;
            drawScore = 0;

            document.getElementById("playerScore").textContent = 0;
            document.getElementById("computerScore").textContent = 0;
            document.getElementById("drawScore").textContent = 0;

            document.getElementById("result").innerHTML = "";
            document.getElementById("choices").innerHTML = "";
        }