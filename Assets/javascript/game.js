var words = ["arthur", "rugrats", "thesimpsons", "scoobydoo", "spongebob", "dannyphantom", "teentitans"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

//variables for audio function
var a = document.getElementById("arthur");
var r = document.getElementById("rugrats");
var simpsons = document.getElementById("simpsons");
var scoobydoo = document.getElementById("scoobydoo");
var spongebob = document.getElementById("spongebob");
var danny = document.getElementById("danny");
var teent = document.getElementById("teent");


function aud() {
    //Arthur Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.play();
        document.getElementById("image").src = "./assets/images/arther.gif";
    }
    //Rugrats Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        a.pause();
        r.play();
        document.getElementById("image").src = "./assets/images/rugrats.gif";
    }
    //Simpsons Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        r.pause();
        a.pause();
        simpsons.play();
        document.getElementById("image").src = "./assets/images/simpsons.gif";
    }
    //Scooby-doo Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.play();
        document.getElementById("image").src = "./assets/images/scooby.gif";
    }
    //Spongebob Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        spongebob.play();
        document.getElementById("image").src = "./assets/images/spongebob.gif";
    }
    //Danny Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        spongebob.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        danny.play();
        document.getElementById("image").src = "./assets/images/danny.gif";
    }
    //Teen Titans Audio & Image
    //---------------------------
    else if (randomWord === words[6]) {
        spongebob.pause();
        danny.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        teent.play();
        document.getElementById("image").src = "./assets/images/teen.gif";
    }
};

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {

        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)


    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(guesses);

    complete();

    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}
