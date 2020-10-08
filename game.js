document.addEventListener('DOMContentLoaded', init)

function init() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
        btn.addEventListener('click', event => {
            const humanWeapon = event.target.innerText.toLowerCase();
            playFirstRound(humanWeapon)
        });
    })
}


function playFirstRound(humanWeapon) {
    let result = '';
    const draw = 'It is a draw';
    const win = 'Human wins';
    const loose = 'Artificial Inteligence wins';

    const compWeapon = compMove();
    console.log("playFirstRound -> compWeapon", compWeapon)


    if (humanWeapon === 'rock') {
        if (compWeapon === 'rock') {
            result = draw;
        } else if (compWeapon === 'paper') {
            result = loose;
        } else {
            result = win;
        }
    };

    if (humanWeapon === 'paper') {
        if (compWeapon === 'paper') {
            result = draw;
        } else if (compWeapon === 'scissors') {
            result = loose;
        } else {
            result = win;
        }
    };

    if (humanWeapon === 'scissors') {
        if (compWeapon === 'scissors') {
            result = draw;
        } else if (compWeapon === 'rock') {
            result = loose;
        } else {
            result = win
        }
    };
    console.log(result);

}

function compMove() {
    const random = Math.random() * 10;
    console.log(random);
    if (random < 3.33) {
        return 'rock';
    } else if (random > 3.33 && random < 6.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
};