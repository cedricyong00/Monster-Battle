let potion = {
    heal : 30,
    numberOfUsage : 4
};

let attackBuff = {
    buffAttack : 25,
    numberOfUsage : 5
};

let accuracyBuff = {
    buffAccuracy : 25,
    numberOfUsage : 5
};

let spitAttack = {
    damage : 10,
    accuracy : 100,
    numberOfUsage : 100
};

let sandAttack = {
    damage : 20,
    accuracy : 75,
    numberOfUsage : 10
};

let earthquakeAttack = {
    damage : 30,
    accuracy : 50,
    numberOfUsage : 10
};

let sandstormAttack = {
    damage : 50,
    accuracy : 25,
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
function addAttackDescription(event) { 
        const typeOfAttack = event.target.id;
    if (typeOfAttack === "spit") {
        MsgElement.innerText = "Damage : " + spitAttack.damage + ", Accuracy : " + spitAttack.accuracy + "%, Number of usage left : " + spitAttack.numberOfUsage;
    } else if (typeOfAttack === "sand") {
        MsgElement.innerText = "Damage : " + sandAttack.damage + ", Accuracy : " + sandAttack.accuracy + "%, Number of usage left : " + sandAttack.numberOfUsage;
    } else if (typeOfAttack === "earthquake") {
        MsgElement.innerText = "Damage: " + earthquakeAttack.damage + ", Accuracy: " + earthquakeAttack.accuracy + "%, Number of usage left: " + earthquakeAttack.numberOfUsage;
    } else if (typeOfAttack === "sandstorm") {
        MsgElement.innerText = "Damage: " + sandstormAttack.damage + ", Accuracy: " + sandstormAttack.accuracy + "%, Number of usage left: " + sandstormAttack.numberOfUsage;
    }
};

attackButton.forEach(button => {
    button.addEventListener('mouseover',addAttackDescription);
});

function addBuffDescription(event) {
    const typeOfBuff = event.target.id
    if (typeOfBuff === "potion") {
        MsgElement.innerText = "Heals 30HP, Number of usage left : " + potion.numberOfUsage;
    } else if (typeOfBuff === "buff-attack") {
        MsgElement.innerText = "Gives 25 attack buff for 1 turn, Number of usage left : " + attackBuff.numberOfUsage;
    } else if (typeOfBuff === "accuracy") {
        MsgElement.innerText = "Gives 25% accuracy buff for 1 turn, Number of usage left : " + accuracyBuff.numberOfUsage;
    }
};

buffButton.forEach(button => {
    button.addEventListener('mouseover', addBuffDescription);
});

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
    if (playerTurn === true && typeOfAttack === "spit" && spitAttack.numberOfUsage > 0) {
        generateNumber();
        if (spitAttack.accuracy >= randomAccuracy) {
            MsgElement.innerText = "DIGGLETT ATTACKED WITH SPIT!";
            spitAttack.numberOfUsage -= 1;
            oppoHealth.value -= spitAttack.damage;
        } else {
            MsgElement.innerText = "DIGGLETT HAS MISSED!";
            spitAttack.numberOfUsage -= 1;
        }
    } else if (spitAttack.numberOfUsage <= 0 && typeOfAttack === "spit") {
        MsgElement.innerText = "THIS ATTACK IS NO LONGER USABLE! PLEASE CHOOSE ANOTHER OPTION!";
        return;
    };

    if (playerTurn === true && typeOfAttack === "sand" && sandAttack.numberOfUsage > 0) {
        generateNumber();
        if (sandAttack.accuracy >= randomAccuracy) {
            MsgElement.innerText = "DIGGLETT ATTACKED WITH SAND!";
            sandAttack.numberOfUsage -= 1;
            oppoHealth.value -= sandAttack.damage;
        } else {
            MsgElement.innerText = "DIGGLETT HAS MISSED!"
            sandAttack.numberOfUsage -= 1;
        }        
    } else if (sandAttack.numberOfUsage <= 0 && typeOfAttack === "sand") {
        MsgElement.innerText = "THIS ATTACK IS NO LONGER USABLE! PLEASE CHOOSE ANOTHER OPTION!";
        return;
    };

    if (playerTurn === true && typeOfAttack === "earthquake" && earthquakeAttack.numberOfUsage > 0) {
        generateNumber();
        if (earthquakeAttack.accuracy >= randomAccuracy) {
            MsgElement.innerText = "DIGGLETT ATTACKED WITH EARTHQUAKE!";
            earthquakeAttack.numberOfUsage -= 1;
            oppoHealth.value -= earthquakeAttack.damage;
        } else {
            MsgElement.innerText = "DIGGLETT HAS MISSED!";
            earthquakeAttack.numberOfUsage -= 1;
        }        
    } else if (earthquakeAttack.numberOfUsage <= 0 && typeOfAttack === "earthquake") {
        MsgElement.innerText = "THIS ATTACK IS NO LONGER USABLE! PLEASE CHOOSE ANOTHER OPTION!";
        return;
    };

    if (playerTurn === true && typeOfAttack === "sandstorm" && sandstormAttack.numberOfUsage > 0) {
        generateNumber();
        if (sandstormAttack.accuracy >= randomAccuracy) {
            MsgElement.innerText = "DIGGLETT ATTACKED WITH SANDSTORM!";
            sandstormAttack.numberOfUsage -= 1;
            oppoHealth.value -= sandstormAttack.damage;
        } else {
            MsgElement.innerText = "DIGGLETT HAS MISSED!";
            sandstormAttack.numberOfUsage -= 1;
        }          
    } else if (sandstormAttack.numberOfUsage <= 0 && typeOfAttack === "sandstorm") {
        MsgElement.innerText = "THIS ATTACK IS NO LONGER USABLE! PLEASE CHOOSE ANOTHER OPTION!";
        return;
    }
    playerTurn = false;
    oppoTurn = true;

    //Removes mouseover eventListener
    removeListener();

    //Remove buff if active
    removeBuffAfterTurn();

    //Annoucing player's turn after 4 seconds
    setTimeout(announceTurn,4000);

    //Opponents randomly selects an attack of its own and apply it onto userhealth.value
    setTimeout(oppoAttack,8000);
    });
});

//Function to disable the button mouseover event listener
function removeListener() {
    attackButton.forEach(button => {
        button.removeEventListener('mouseover',addAttackDescription);
    });
    buffButton.forEach(button => {
        button.removeEventListener('mouseover', addBuffDescription);
    });
}

//Function to enable the button mouseover event listener
function addListener() {
    attackButton.forEach(button => {
        button.addEventListener('mouseover',addAttackDescription);
    });
    buffButton.forEach(button => {
        button.addEventListener('mouseover', addBuffDescription);
    });
}

//Declaring opponent's attack
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
    if (oppoChosenAttack === "bicepCurl" && oppoTurn === true) {
        if (bicepCurl.accuracy >= randomOppoAccuracy) {
        userHealth.value -= bicepCurl.damage;
        MsgElement.innerText = "DAVID LAID SHOWED OFF HIS BICEPS!";
        } else {
            MsgElement.innerText = "DAVID LAID HAS MISSED HIS ATTACK!";
        }
    } else if (oppoChosenAttack === "cuteSmile" && oppoTurn === true) {
        if (cuteSmile.accuracy >= randomOppoAccuracy) {
            userHealth.value -= cuteSmile.damage;
            MsgElement.innerText = "DAVID LAID SHOWED OFF HIS CUTE SMILE!";
            } else {
                MsgElement.innerText = "DAVID LAID HAS MISSED HIS ATTACK!";
            }
    } else if (oppoChosenAttack === "showLove" && oppoTurn === true) {
        if (showLove.accuracy >= randomOppoAccuracy) {
            userHealth.value -= showLove.damage;
            MsgElement.innerText = "DAVID LAID SHOWED OFF HIS LOVE FOR YOU!";
            } else {
                MsgElement.innerText = "DAVID LAID HAS MISSED HIS ATTACK!";
            }
    } else if (oppoChosenAttack === "showAbs" && oppoTurn === true) {
        if (showAbs.accuracy >= randomOppoAccuracy) {
            userHealth.value -= showAbs.damage;
            MsgElement.innerText = "DAVID LAID SHOWED OFF HIS ABS TO YOU!";
            } else {
                MsgElement.innerText = "DAVID LAID HAS MISSED HIS ATTACK!";
            }       
    }
    playerTurn = true;
    oppoTurn = false;

    //Announcing of player's turn
    setTimeout(announceTurn,4000);

    //Enabling of the mouseover eventListener
    setTimeout(addListener,6000);
};

//Announce player's Turn
function announceTurn() {
 if (playerTurn === false) {
    MsgElement.innerText = "DAVID LAID'S TURN.";
 } else if (oppoTurn === false) {
    MsgElement.innerText = "DIGGLETT'S TURN.";
 }
};

//Declaring buff's status
let checkBuffStatus = false;

//Adding of 'click' eventListeners to buff buttons
buffButton.forEach(button => {
    button.addEventListener('click', event => {
    const typeOfBuff = event.target.id;
    if (playerTurn === true && typeOfBuff === "potion" && potion.numberOfUsage > 0 && userHealth.value < 100) {
        userHealth.value += potion.heal;
        potion.numberOfUsage -= 1;
        MsgElement.innerText = "YOU HAVE USED POTION ON DIGGLETT!";
    } else if (potion.numberOfUsage <= 0 && typeOfBuff === "potion") {
        MsgElement.innerText = "THIS BUFF IS NO LONGER USABLE! PLEASE CHOOSE ANOTHER OPTION!";
        return;        
    } else if (typeOfBuff === "potion" && userHealth.value === 100) {
        MsgElement.innerText = "DIGGLETT'S HEALTH IS ALREADY AT 100! PLEASE CHOOSE ANOTHER OPTION!";
        return;
    };

    if (playerTurn === true && checkBuffStatus === true && (typeOfBuff === "buff-attack" || typeOfBuff === "accuracy")) {
        MsgElement.innerText = "BUFF IS ALREADY AND ONLY ACTIVE FOR THIS ROUND! PLEASE CHOOSE ANOTHER OPTION!"
        return;
    };    

    if (playerTurn === true && typeOfBuff === "buff-attack" && attackBuff.numberOfUsage > 0 && checkBuffStatus === false) {
        spitAttack.damage += attackBuff.buffAttack;
        sandAttack.damage += attackBuff.buffAttack;
        earthquakeAttack.damage += attackBuff.buffAttack;
        sandstormAttack.damage += attackBuff.buffAttack;
        attackBuff.numberOfUsage -= 1;
        MsgElement.innerText = "YOU HAVE USED ATTACK BUFF ON DIGGLETT!";
        checkBuffStatus = true;
    } else if (attackBuff.numberOfUsage <= 0 && typeOfBuff === "buff-attack" && checkBuffStatus === false) {
        MsgElement.innerText = "THIS BUFF IS NO LONGER USABLE! PLEASE CHOOSE ANOTHER OPTION!";
        return;        
    };

    if (playerTurn === true && typeOfBuff === "accuracy" && accuracyBuff.numberOfUsage > 0 && checkBuffStatus === false) {
        sandAttack.accuracy += accuracyBuff.buffAccuracy;
        earthquakeAttack.accuracy += accuracyBuff.buffAccuracy;
        sandstormAttack.accuracy += accuracyBuff.buffAccuracy;
        accuracyBuff.numberOfUsage -= 1;
        MsgElement.innerText = "YOU HAVE USED ACCURACY BUFF ON DIGGLETT!";
        checkBuffStatus = true;
    } else if (accuracyBuff.numberOfUsage <= 0 && typeOfBuff === "accuracy" && checkBuffStatus === false) {
        MsgElement.innerText = "THIS BUFF IS NO LONGER USABLE! PLEASE CHOOSE ANOTHER OPTION!";
        return;        
    };
    
    playerTurn = false;
    oppoTurn = true;

    //Removes mouseover eventListener
    removeListener();

    //Annoucing player's turn after 4 seconds
    setTimeout(announceTurn,4000);

    //Opponents randomly selects an attack of its own and apply it onto userhealth.value
    setTimeout(oppoAttack,8000);
    });
});

//Function to check if buff is active on the next turn, and remove it after that turn
function removeBuffAfterTurn() {
    if (checkBuffStatus === true) {
        if (sandstormAttack.accuracy !== 25) {
            sandAttack.accuracy -= accuracyBuff.buffAccuracy;
            earthquakeAttack.accuracy -= accuracyBuff.buffAccuracy;
            sandstormAttack.accuracy -= accuracyBuff.buffAccuracy;
            checkBuffStatus = false;    
        } else if (sandstormAttack.damage !== 50) {
            spitAttack.damage = 10;
            sandAttack.damage = 20;
            earthquakeAttack.damage = 30;
            sandstormAttack.damage = 50;
            checkBuffStatus = false;           
        };
    }
};