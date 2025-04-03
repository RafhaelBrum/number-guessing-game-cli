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

                        default:
                            console.log("Please choose a valid difficulty level (1 - easy | 2 - medium | 3 - hard)");
                            difficultyLevel();
                            break;
                    }

                    resolve(difficulty);
                    rl.close();
                }
            });
        }

        askAgain();
    });
};