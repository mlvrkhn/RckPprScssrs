playFirstRound()

function playFirstRound() {
    let result = '';
    const draw = 'It is a draw';
    const win = 'Human wins';
    const loose = 'Artificial Inteligence wins';

    const humanWeapon = humanMove();
    console.log("playFirstRound -> humanWeapon", humanWeapon)
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
        console.log(result);
    };

    if (humanWeapon === 'paper') {
        if (compWeapon === 'paper') {
            result = draw;
        } else if (compWeapon === 'scissors') {
            result = loose;
        } else {
            result = win
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

function humanMove() {
    const playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
    return playerSelection;
    console.log("humanMove -> playerSelection", playerSelection)

}



