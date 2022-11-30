#!usr/bin/env node
import inquirer from "inquirer";
async function myCalc() {
    const Question = await inquirer
        .prompt([
        {
            type: 'list',
            name: 'operator',
            message: `start your calculation `,
            choices: [`"Addition,Subtraction,Multiplication,Division"]\n`]
        },
        {
            type: "number",
            name: "num1",
            message: "enter num1"
        },
        {
            type: "number",
            name: "num2",
            message: "enter num2"
        }
    ]);
    if (Question.operator == "Addition") {
        console.log(`${Question.num1}+ ${Question.num2}=${Question.num1 + Question.num2} `);
    }
    else if (Question.operator == "Subtraction") {
        console.log(`${Question.num1}- ${Question.num2}=${Question.num1 - Question.num2} `);
    }
    else if (Question.operator == "Multiplication") {
        console.log(`${Question.num1}* ${Question.num2}=${Question.num1 * Question.num2} `);
    }
    else if (Question.operator == "Multiplication") {
        console.log(`${Question.num1}/ ${Question.num2}=${Question.num1 / Question.num2} `);
    }
}
myCalc();
