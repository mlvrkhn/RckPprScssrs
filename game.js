document.addEventListener('DOMContentLoaded', init)

function init() {
    // handle user click
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
        btn.addEventListener('click', event => {
            const humanWeapon = event.target.innerText.toLowerCase();
            playRound(humanWeapon)
        });
    })
}

const scores = {
    human: 0,
    comp: 0,
}

function playRound(humanWeapon) {
    let result = '';
    const draw = 'It is a draw';
    const win = 'Human wins';
    const loose = 'Artificial Inteligence wins';
    const compWeapon = compMove();

    if (humanWeapon === 'rock') {
        if (compWeapon === 'rock') {
            pointForHuman();
            pointForPC();
            result = draw;
        } else if (compWeapon === 'paper') {
            pointForPC();
            result = loose;
        } else {
            pointForHuman();
            result = win;
        }
        console.log('RESULT OF THE ROUND: ' + result)
    };

    if (humanWeapon === 'paper') {
        if (compWeapon === 'paper') {
            pointForHuman();
            pointForPC();
            result = draw;
        } else if (compWeapon === 'scissors') {
            pointForPC();
            result = loose;
        } else {
            pointForHuman();
            result = win;
        }
        console.log('RESULT OF THE ROUND: ' + result)
    };

    if (humanWeapon === 'scissors') {
        if (compWeapon === 'scissors') {
            pointForHuman();
            pointForPC();
            result = draw;
        } else if (compWeapon === 'rock') {
            pointForPC();
            result = loose;
        } else {
            pointForHuman();
            result = win;
        }
        console.log('RESULT OF THE ROUND: ' + result)
    };
    displayScore();
    announceWinner();
}

function compMove() {
    const random = Math.random() * 10;
    if (random < 3.33) {
        return 'rock';
    } else if (random > 3.33 && random < 6.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
};
function announceWinner() {
    if (scores.comp >= 5) {
        alert('AI wins!')
        resetScore();
    } else if (scores.human >= 5) {
        alert('Human wins!')
        resetScore();
    }
}
function displayScore() {
    console.table(scores);
    const scoreContainer = document.querySelector('.game__score');
    const score = `Current Score: Human ${scores.human} v. ${scores.comp} Artificial Inteligence`;
    scoreContainer.innerText = score;
};
function pointForPC() {
    scores.comp++
}
function pointForHuman() {
    scores.human++
}
function resetScore() {
    scores.comp = 0;
    scores.human = 0;

}