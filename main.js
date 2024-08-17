console.log(chalk.bold.yellowBright("\n \t\tWELCOME ON AHAD WORD COUNTER"));
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(60));
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter a sentence",
    }
]);
let word = answer.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("- sentence word"));
console.log(word);
console.log(chalk.bold(`\n - word counter: ${chalk.bold.red(word.length)}`));
console.log("=".repeat(60));
