import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

export async function difficultyLevel(): Promise<string> {
    var difficulty: string;

    return new Promise((resolve) => {

        function askAgain() {
            const validAnswers = ["1", "2", "3"];

            rl.question("Please select the difficulty level: \n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n", (answer) => {

                if (!validAnswers.includes(answer)) {
                    askAgain();
                } else {
                    switch (answer) {
                        case "1":
                            difficulty = 'easy';
                            console.log(`Great! You have selected the ${ difficulty } level.`);
                            break;

                        case "2":
                            difficulty = "medium";
                            console.log(`Great! You have selected the ${ difficulty } level.`);
                            break;

                        case "3":
                            difficulty = "hard";
                            console.log(`Great! You have selected the ${ difficulty } level.`);
                            break;
                        case "4":
                            difficulty = "custom";
                            console.log(`Great! You have selected the ${ difficulty } level.`);
                            break;

                        default:
                            console.log("Please choose a valid difficulty level (1 - easy | 2 - medium | 3 - hard)");
                            difficultyLevel();
                            break;
                    }

                    resolve(difficulty);
                }
            });
        }

        askAgain();
    });
};

export function generateRandomNumber(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min) + 1);
}

export function getChancesByDifficulty(level: string): number {
    const levels: Record<string, number> = {
        easy: 10,
        medium: 5,
        hard: 3
    };

    return levels[level];
}

export function isCorrect(answer: number, secret: number): boolean {
    if (secret > answer) {
        console.log(`Incorrect! The number is greater than ${ answer }.`);
        return false;
    }

    else if (secret < answer) {
        console.log(`Incorrect! The number is less than ${ answer }.`)
        return false;
    }

    else {
        // console.log("You win!");
        return true;
    }

}

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

function playAgain() {
    rl.question(`Wanna play again? Y or N       `, (answer) => {
        if (answer === "y") playGame();
        else if (answer === "n") {
            rl.close();
            return;
        }
        else playAgain();
    });
}


export async function playGame() {
    const randomNumber = generateRandomNumber();
    const difficulty = await difficultyLevel();
    const chances = getChancesByDifficulty(difficulty);
    let result = false;
    let counter = 0;

    for (let i = 0; i < chances; i++) {
        const guess = await ask(`\nEnter your guess: `);
        if (Number(guess) > 100) console.log('lol!');
        result = isCorrect(Number(guess), randomNumber)
        counter++
        if (result) break;
        if (chances - counter !== 0) console.log(`You have ${ chances - counter } chances left.`)

    }

    if (result) {
        console.log(`Congratulations! You guessed the correct number in ${ counter } attempts.`)
        playAgain();
    }

    else {
        console.log(`You lose. The number was ${ randomNumber }.\n`);
        playAgain();
    }

}