//list of words to pull from randomly
var dinosaurs = ["utahraptor", "triceratops", "velociraptor", "tyranosaurus rex", "stegosaurus", "giraffatitan", "zephyrosaurus", "quaesitosaurus", "brachiosaurus", "megalosaurus"]
var gameWord = []
var blanks = []
var letterGrave = []

$(document).ready(function () {
    document.onkeyup = function hangManGame() {

        //press any key to select a random word
        gameWord = document.getElementById("word").innerHTML = dinosaurs[Math.floor(Math.random() * 10)];
        //display a series of blanks depending on the length of the random word array
        blanks = [];
        for (var i = 0; i < gameWord.length; i++) {
            blanks.push("_");
            if (gameWord[i] === " ") {
                blanks[i] = (" ");
            }
        }
        document.getElementById("blanks").innerHTML = blanks.join(" ");
        //when a key is pressed, check to see if the key is in the random word array
        //if the letter is in the word, replace the dash with the letter for each time the letter is in the word
        //if the letter is not in the word send it to a dead letter array and display it in the letter graveyard
        document.onkeyup = function (guess) {
            attempt = guess.key;
            for (var i = 0; i < blanks.length; i++) {
                if (attempt === gameWord[i]) {
                    blanks[i] = attempt;
                    console.log("letter is there")
                    document.getElementById("blanks").innerHTML = blanks.join(" ");
                } else {
                    letterGrave.push(attempt)
                    console.log("letter is not there")
                    document.getElementById("letterGrave").innerHTML = letterGrave.join(" ")
                }
            }
        }


        //once twelve dead letters are selected the game is over

        //select a new word once the previous word is guessed or the game ends due to dead letters
        console.log(gameWord)
        console.log(blanks)
    }
});

