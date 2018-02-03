//list of words to pull from randomly
var dinosaurs = ["utahraptor", "triceratops", "velociraptor", "tyranosaurus rex", "stegosaurus", "giraffatitan", "zephyrosaurus", "quaesitosaurus", "brachiosaurus", "megalosaurus"]
var gameWord = []
var blanks = []
var letterGrave = []
var wins = 0
var loses = 0
var guesses = 0

$(document).ready(function () {
    //starts the game with a random key
    document.onkeypress = function start() {
        reset()
        hangManGame()
    }
    //resets all variables and chooses the word
    function reset() {
        gameWord = [];
        blanks = [];
        letterGrave = [];
        guesses = 12;
        document.getElementById("guesses").innerHTML = guesses
        gameWord = document.getElementById("word").innerHTML = dinosaurs[Math.floor(Math.random() * 10)];
        document.getElementById("letterGrave").innerHTML = letterGrave.join(" ")
        //display a series of blanks depending on the length of the random word array
        for (var i = 0; i < gameWord.length; i++) {
            blanks.push("_");
            if (gameWord[i] === " ") {
                blanks[i] = ("-");
            }
        }
        document.getElementById("blanks").innerHTML = blanks.join(" ");
    }

    function hangManGame() {
        document.onkeypress = function (guess) {
            attempt = guess.key;
            if (letterGrave.includes(attempt.toUpperCase()) || blanks.includes(attempt)) {
                alert("You've already guess that. ")
            }
            //when a key is pressed, check to see if the key is in the random word array
            //if the letter is in the word, replace the dash with the letter for each time the letter is in the word
            if (gameWord.includes(attempt)) {
                for (var i = 0; i < blanks.length; i++) {
                    if (attempt === gameWord[i]) {
                        blanks[i] = attempt;
                        document.getElementById("blanks").innerHTML = blanks.join(" ");
                    }
                }
            } else {
                //if the letter is not in the word send it to a dead letter array and display it in the letter graveyard
                if (letterGrave.includes(attempt.toUpperCase())) {
                } else {
                    guesses --
                    document.getElementById("guesses").innerHTML = guesses
                    letterGrave.push(attempt.toUpperCase())
                    document.getElementById("letterGrave").innerHTML = letterGrave.join(" ")
                }
            }
            //once twelve dead letters are selected the game is over
            if (letterGrave.length === 12) {
                loses++
                alert("Game Over " + "You have " + loses + " loses!");
                //select a new word once the previous word is guessed or the game ends due to dead letters
                reset()
                //once the word is finished the game is over
            } else if (blanks.join("") === gameWord) {
                wins++
                alert("You win! " + "You have " + wins + " wins!");
                //select a new word once the previous word is guessed or the game ends due to dead letters
                reset()
            }
        }
    }
});

