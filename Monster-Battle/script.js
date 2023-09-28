const potion = {
    heal : 30,
    numberOfUsage : 4
};

const attackBuff = {
    buffAttack : 25,
    numberOfUsage : 5
};

const accuracyBuff = {
    buffAccuracy : 25,
    numberOfUsage : 5
};

let lawAttack = {
    damage : 10,
    accuracy : 100,
    numberOfUsage : 100
};

let politicsAttack = {
    damage : 20,
    accuracy : 75,
    numberOfUsage : 10
};

let populistAttack = {
    damage : 30,
    accuracy : 50,
    numberOfUsage : 10
};

let threatenAttack = {
    damage : 40,
    accuracy : 50,
    numberOfUsage : 10
};

//Adding of 'mouseover' eventListener to give information on button hovered over
//Getting "Message" element
let MsgElement = document.querySelector('.Message');

//Getting the button elements
const attackButton = document.querySelectorAll('.attacks button');
const buffButton = document.querySelectorAll('.buffs button');
const webPage = document.querySelector('body');
//Adding mouseover eventListener

attackButton.forEach(button => {
    button.addEventListener('mouseover',event => {
        const typeOfAttack = event.target.id;
        if (typeOfAttack === "law") {
        MsgElement.innerText = "Damage : " + lawAttack.damage + ", Accuracy : " + lawAttack.accuracy + ", Number of usage left : " + lawAttack.numberOfUsage;
    } else if (typeOfAttack === "politics") {
        MsgElement.innerText = "Damage : " + politicsAttack.damage + ", Accuracy : " + politicsAttack.accuracy + ", Number of usage left : " + politicsAttack.numberOfUsage;
    } else if (typeOfAttack === "populist") {
        MsgElement.innerText = "Damage: " + populistAttack.damage + ", Accuracy: " + populistAttack.accuracy + ", Number of usage left: " + populistAttack.numberOfUsage;
    } else if (typeOfAttack === "threaten") {
        MsgElement.innerText = "Damage: " + threatenAttack.damage + ", Accuracy: " + threatenAttack.accuracy + ", Number of usage left: " + threatenAttack.numberOfUsage;
    }
    });
});

buffButton.forEach(button => {
    button.addEventListener('mouseover', event => {
        const typeOfBuff = event.target.id
        if (typeOfBuff === "potion") {
            MsgElement.innerText = "Heals 30HP, Number of usage left : " + potion.numberOfUsage
        } else if (typeOfBuff === "buff-attack") {
            MsgElement.innerText = "Gives 25% attack buff for 1 turn, Number of usage left : " + attackBuff.numberOfUsage
        } else if (typeOfBuff === "accuracy") {
            MsgElement.innerText = "Gives 25% accuracy buff for 1 turn, Number of usage left : " + accuracyBuff.numberOfUsage
        }
    })
})

//Extracting User's health
let userHealth = document.getElementById("user-health");
let oppoHealth = document.getElementById("oppo-health");

//To generate a random number from 0-100
let randomAccuracy = null;
function generateNumber() {
    randomAccuracy = Math.floor(Math.random() * 101);
    return randomAccuracy;
}

//Declaring user's turn
let playerTurn = true;
let oppoTurn = false;

//Adding click eventListener to attack buttons
attackButton.forEach(button => {
    button.addEventListener('click', event => {
    const typeOfAttack = event.target.id
    if (playerTurn === true && typeOfAttack === "law") {
        generateNumber();
        if (lawAttack.accuracy >= randomAccuracy) {
            MsgElement.innerText = "DIGGLETT ATTACKED WITH LAW!";
            lawAttack.numberOfUsage -= 1
            oppoHealth.value -= lawAttack.damage;
        } else {
            MsgElement.innerText = "DIGGLETT HAS MISSED!";
        }
    } else if (playerTurn === true && typeOfAttack === "politics") {
        generateNumber();
        if (politicsAttack.accuracy >= randomAccuracy) {
            MsgElement.innerText = "DIGGLETT ATTACKED WITH POLITICS!";
            politicsAttack.numberOfUsage -= 1;
            oppoHealth.value -= politicsAttack.damage;
        } else {
            MsgElement.innerText = "DIGGLETT HAS MISSED!"
        }        
    } else if (playerTurn === true && typeOfAttack === "populist") {
        generateNumber();
        if (populistAttack.accuracy >= randomAccuracy) {
            MsgElement.innerText = "DIGGLETT ATTACKED WITH POPULIST!";
            populistAttack.numberOfUsage -= 1;
            oppoHealth.value -= populistAttack.damage;
        } else {
            MsgElement.innerText = "DIGGLETT HAS MISSED!";
        }        
    } else if (playerTurn === true && typeOfAttack === "threaten") {
        generateNumber();
        if (threatenAttack.accuracy >= randomAccuracy) {
            MsgElement.innerText = "DIGGLETT ATTACKED WITH THREATEN!";
            threatenAttack.numberOfUsage -= 1;
            oppoHealth.value -= threatenAttack.damage;
        } else {
            MsgElement.innerText = "DIGGLETT HAS MISSED!";
        }          
    }
    playerTurn = false;
    oppoTurn = true;
    });
});

//Adding of opponent's attack
const bicepCurl = {
    damage : 2,
    accuracy : 100
};

const cuteSmile = {
    damage : 4,
    accuracy : 75
};

const showLove = {
    damage : 6,
    accuracy : 50
};

const showAbs = {
    damage : 8,
    accuracy : 25
};

//Putting all attacks into one array
const oppoTypeOfAttacks = ["bicepCurl", "cuteSmile", "showLove", "showAbs"];

let randomOppoAttack = null;
function generateOppoNumber() {
    randomOppoAttack = Math.floor(Math.random() * 4);
    return randomOppoAttack;
}

let randomOppoAccuracy = null;
function generateOppoAccuracy() {
    randomOppoAccuracy = Math.floor(Math.random() * 101);
    return randomOppoAccuracy;
}

//Function for opponent to attack on its turn
function oppoAttack() {
    generateOppoNumber();
    generateOppoAccuracy();
    let oppoChosenAttack = oppoTypeOfAttacks[randomOppoAttack];
    if (oppoChosenAttack === "bicepCurl" && oppoTurn = true) {
        if (bicepCurl.accuracy >= randomOppoAccuracy) {
        userHealth -= bicepCurl.damage
        MsgElement.innerText = "DAVID LAID SHOWED OFF HIS BICEPS!"
        } else {
            MsgElement.innerText = "DAVID LAID HAS MISSED HIS ATTACK!"
        }
    } else if (oppoChosenAttack == "cuteSmile" && oppoTurn = true) {

    }
}