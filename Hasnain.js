import inquirer from "inquirer";
const guessNumber = 7;
const answer = await inquirer.prompt([
    { type: "number",
        name: "HasnainKeerio",
        message: "Please guess a correct number" },
]);
if (answer.HasnainKeerio === guessNumber) {
    console.log("congratulations you won");
}
else {
    console.log("you lose your game");
}
