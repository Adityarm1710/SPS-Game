let Score = JSON.parse(localStorage.getItem("SCORE")) || {
        Total_Chances: 0,
        won: 0,
        Lose: 0,
        Tie: 0,
      };
      UpdateScore();
      function Reset() {
        Score.Total_Chances = 0;
        Score.won = 0;
        Score.Lose = 0;
        Score.Tie = 0;
        localStorage.removeItem("SCORE");
        UpdateScore();
      }
      function finalResult(yourMove) {
        Score.Total_Chances += 1;
        const Com_Res = comMove();
        if (yourMove === "Rock") {
          if (Com_Res == "Rock") {
            Result = "Tie";
          } else if (Com_Res == "Paper") {
            Result = "You Lose";
          } else {
            Result = "You Won";
          }
        } else if (yourMove === "Scissor") {
          if (Com_Res == "Rock") {
            Result = "You Lose";
          } else if (Com_Res == "Paper") {
            Result = "You Won";
          } else {
            Result = "Tie";
          }
        } else if (yourMove === "Paper") {
          if (Com_Res == "Rock") {
            Result = "You Won";
          } else if (Com_Res == "Paper") {
            Result = "Tie";
          } else {
            Result = "You Lose";
          }
        }

        if (Result === "You Won") {
          Score.won += 1;
        } else if (Result === "You Lose") {
          Score.Lose += 1;
        } else if (Result === "Tie") {
          Score.Tie += 1;
        }
        localStorage.setItem("SCORE", JSON.stringify(Score));

        document.querySelector(".ResultBlock").innerHTML = `Result: ${Result}`;
        document.querySelector(
          ".ResultSummary"
        ).innerHTML = `You:<img src="images/${yourMove}-emoji.png" class="move-icon"> and Computer:<img src="images/${Com_Res}-emoji.png" class="move-icon">`;
        UpdateScore();

        /*alert(`Your Move: ${yourMove} and Computer Move: ${Com_Res} ,Final_Result: ${Result}
Scorecard: Total Chances: ${Score.Total_Chances} wining: ${Score.won}, Losing: ${Score.Lose}, Tie: ${Score.Tie}`);*/
      }

      function UpdateScore() {
        document.querySelector(
          ".ScoreBlock"
        ).innerHTML = `Total Chances: ${Score.Total_Chances},\n wining: ${Score.won},\n Losing: ${Score.Lose},\n Tie: ${Score.Tie}`;
      }
      function comMove() {
        const Ran_val = Math.random();
        let Com_Res = "";
        let Result = "";
        if (Ran_val >= 0 && Ran_val < 1 / 3) {
          Com_Res = "Rock";
        } else if (Ran_val >= 1 / 3 && Ran_val < 2 / 3) {
          Com_Res = "Paper";
        } else {
          Com_Res = "Scissor";
        }
        return Com_Res;
      }
      console.log(Score);