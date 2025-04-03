import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });


export function generateRandomNumber(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min) + 1);
}

export function getChancesByDifficulty(level: string, chances?: number): number {
    if (level === "custom" && typeof chances !== "undefined") return chances;

    const levels: Record<string, number> = {
        easy: 10,
        medium: 5,
        hard: 3
    };

    return levels[level];
}

export function isCorrect(chances: number, answer: number, secret: number): void {
    let counter = 0;

    for (let i = 0; i < chances; i++) {

        if (secret > answer) {
            console.log(`Incorrect! The number is greater than ${ answer }.`);
        }
        else if (secret < answer) {
            console.log(`Incorrect! The number is less than ${ answer }.`)
        } else {
            console.log(`Congratulations! You guessed the correct number in ${ counter } attempts.`)
            return;
        }
    }
    console.log(`You lose... the correct number was ${ secret }.`);
    return;
}

