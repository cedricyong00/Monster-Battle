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
    damage : 100,
    accuracy : 100,
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
function addAttackButton(event) {
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
            console.log("test");
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
    removeHealthBarListener();

    //Removes click evenetListener
    removeClick();

    //Remove buff if active
    removeBuffAfterTurn();

    //CheckWin Status, else continue game if not won
    checkWin();
};

attackButton.forEach(button => {
    button.addEventListener('click', addAttackButton);
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
let bicepCurl = {
    damage : 2,
    accuracy : 100
};

let cuteSmile = {
    damage : 4,
    accuracy : 75
};

let showLove = {
    damage : 6,
    accuracy : 50
};

let showAbs = {
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

    setTimeout(checkLose,3000);
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
function addBuffButton(event) {
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
    removeHealthBarListener();

    //Removes click evenetListener
    removeClick();

    //Annoucing player's turn after 4 seconds
    setTimeout(announceTurn,3000);

    //Opponents randomly selects an attack of its own and apply it onto userhealth.value
    setTimeout(oppoAttack,6000);
    };

buffButton.forEach(button => {
    button.addEventListener('click', addBuffButton);
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

//Creating of elements for .Level
let currentScore = 1;
let highestScore = 0;
let level = document.querySelector('.Level');
level.innerHTML = 'Level ' + currentScore + '<br>High Score: ' + highestScore;

//Function to check win state and proceed to next level
function checkWin() {
    if (oppoHealth.value <= 0) {
        MsgElement.innerText = "YOU HAVE WON DAVID LAID ON THIS LEVEL! MOVING ON TO THE NEXT STAGE!";
        setTimeout(() => {
            addListener();
            addClick();
            addHealthBarListener();
            MsgElement.innerText = "BECAREFUL AS THE OPPONENT HAS GROWN STRONGER!"
            currentScore += 1;
            level.innerHTML = 'Level ' + currentScore + '<br>High Score: ' + highestScore;
            bicepCurl.damage += 5;
            cuteSmile.damage +=5;
            showLove.damage += 5;
            showAbs += 5;
            oppoHealth.value = 100;
            playerTurn = true;
            oppoTurn = false;
            return;
        },3000);
    } else {
    //Annoucing player's turn after 4 seconds
    setTimeout(announceTurn,3000);

    //Opponents randomly selects an attack of its own and apply it onto userhealth.value
    setTimeout(oppoAttack,6000);
    };
};

//Change image
let image = document.querySelector('.Battle');

//Function to remove click eventListener
function removeClick() {
    attackButton.forEach(button => {
        button.removeEventListener('click', addAttackButton);
    });
    buffButton.forEach(button => {
        button.removeEventListener('click', addBuffButton);
    });
};

//Function to add click eventListener
function addClick() {
    attackButton.forEach(button => {
        button.addEventListener('click', addAttackButton);
    });
    buffButton.forEach(button => {
        button.addEventListener('click', addBuffButton);
    });
};

//Function to check lose state and end the game
function checkLose() {
    if (userHealth.value <= 0) {
        image.innerHTML="<div class='lose'>YOU LOST!</div>";
        MsgElement.innerHTML="<button id='reset'>PLAY AGAIN</button>";
        let resetButton = document.querySelector('.Message button');
        resetButton.addEventListener('click',() => {
            resetFeatures();
            removeBuffAfterTurn();
            addListener();
            addClick();
            addHealthBarListener();
        });
        if (currentScore > highestScore) {
            highestScore = currentScore;
        };
    } else {
    //Announcing of player's turn
    announceTurn();

    //Enabling of the mouseover eventListener
    setTimeout(addListener,3000);
    setTimeout(addHealthBarListener,3000);
    setTimeout(addClick,3000);
    };
}

//Reset features
function resetFeatures() {
    currentScore = 1;
    level.innerHTML = 'Level ' + currentScore + '<br>High Score: ' + highestScore;
    bicepCurl.damage = 2;
    cuteSmile.damage = 4;
    showLove.damage = 6;
    showAbs.damage = 8;
    image.innerHTML = "<img src='a90.jpg' alt='' width='100%' height='100%'>";
    potion.numberOfUsage = 4;
    attackBuff.numberOfUsage = 5;
    accuracyBuff.numberOfUsage = 5;
    spitAttack.numberOfUsage = 100;
    sandAttack.numberOfUsage = 10;
    earthquakeAttack.numberOfUsage = 10;
    sandstormAttack.numberOfUsage = 10;
    oppoHealth.value = 100;
    userHealth.value = 100;
    MsgElement.innerHTML="Player 1's Turn";
    playerTurn = true;
    oppoTurn = false;
};

//Function to check health
let userHealthBar = document.querySelector('.User progress');
let oppoHealthBar = document.querySelector('.Opponent progress');
function checkHealth(event) {
    let healthBar = event.target.id
    if (healthBar === "user-health") {    
        MsgElement.innerHTML = "Digglett HP: " + userHealth.value + " / " + userHealth.max;
    } else if (healthBar === "oppo-health") {
        MsgElement.innerHTML = "David Laid HP: " + oppoHealth.value + " / " + oppoHealth.max;
    };
};

function addHealthBarListener() {
    userHealthBar.addEventListener('mouseover',checkHealth);
    oppoHealthBar.addEventListener('mouseover',checkHealth);
};

//Function to remove function to check health
function removeHealthBarListener() {
    userHealthBar.removeEventListener('mouseover',checkHealth);
    oppoHealthBar.removeEventListener('mouseover',checkHealth);
};

//Function call back to add ability to check specific health value
addHealthBarListener();

//Shortcut to intialise lose state
    userHealthBar.addEventListener('click',() => {
        userHealth.value = 0;
        checkLose();
    });