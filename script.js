<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Code Quiz</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <div class="container">
        <div id="startpage">
            <h2>CODE QUIZ</h2>
            <button id="startbtn">Start Code Quiz</button>
            <button id="startPageHighscore" onclick="showHighscore()">High Scores</button>
        </div>

        <div id="quiz">
            <div id="timer">Time left: </div>
            <div id="questions">
            </div>
            <button id="a" onclick="checkAnswer('A')">A</button>
            <button id="b" onclick="checkAnswer('B')">B</button>
            <button id="c" onclick="checkAnswer('C')">C</button>
            <button id="d" onclick="checkAnswer('D')">D</button>
            <div id="result"></div>
        </div>
        <div id="gameover">

            <div id="finalScore"></div>
            <input type="text" size="50" placeholder="Enter you initials for high score" name="intials" id="initials" />
            <button id="submitScore">Submit Score</button>
        </div>
        <div id=highscoreContainer>
            <div id="high-scorePage">
                <div id="highscore-header">
                    <h3>User Initials</h3>
                    <h3>Score</h3>
                </div>

                <div id="highscore-initials"></div>
                <div id="highscore-score"></div>
            </div>
            <div id="endGameButtons">
                <button id="playAgain" onclick="replayQuiz()">Play Again</button>
                <button id="clearHighscore" onclick="clearScore()">Clear Highscores</button>
            </div>
        </div>
</body>
<script src="script.js"></script>

</html>
