const potion = {
    heal : 30,
    numberOfUsage : 4
};

const attackBuff = {
    buffAttack : 25,
    numberOfUsage : 5
}

const accuracyBuff = {
    buffAccuracy : 25,
    numberOfUsage : 5
}

let lawAttack = {
    damage : 5,
    accuracy : 100,
    numberOfUsage : 100
};

let politicsAttack = {
    damage : 10,
    accuracy : 75,
    numberOfUsage : 5
};

let populistAttack = {
    damage : 15,
    accuracy : 50,
    numberOfUsage : 5
};

let threatenAttack = {
    damage : 20,
    accuracy : 50,
    numberOfUsage : 5
};

//Adding of 'mouseover' eventListener to give information on button hovered over
//Getting "Message" element
let MsgElement = document.querySelector('.Message');

//Getting the button elements
const buttonElement = document.querySelectorAll('.attacks button')

//Adding mouseover eventListener
buttonElement.forEach(button => {
    button.addEventListener('mouseover',event => {
        const typeOfAttack = event.target.id;
        if (typeOfAttack === "law") {
        MsgElement.innerText = "Damage : " + lawAttack.damage + ", Accuracy : " + lawAttack.accuracy + ", Number of usage left : " + lawAttack.numberOfUsage + ".";
    } else if (typeOfAttack === "politics") {
        MsgElement.innerText = "Damage : " + politicsAttack.damage + ", Accuracy : " + politicsAttack.accuracy + ", Number of usage left : " + politicsAttack.numberOfUsage + ".";
    } else if (typeOfAttack === "populist") {
        MsgElement.innerText = "Damage: " + populistAttack.damage + ", Accuracy: " + populistAttack.accuracy + ", Number of usage left: " + populistAttack.numberOfUsage + ".";
    } else if (typeOfAttack === "threaten") {
        MsgElement.innerText = "Damage: " + threatenAttack.damage + ", Accuracy: " + threatenAttack.accuracy + ", Number of usage left: " + threatenAttack.numberOfUsage + ".";
    }
    });
});