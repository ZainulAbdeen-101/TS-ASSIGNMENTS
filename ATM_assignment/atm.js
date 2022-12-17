#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const start = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome To NPX World");
    await start();
    rainbowTitle.stop();
    console.log(`

 
 
 ______   _______  __   __  _______  ___      _______  _______  _______  ______         _______  __   __            _______  _______  ___   __    _ 
 |      | |       ||  | |  ||       ||   |    |       ||       ||       ||      |       |  _    ||  | |  |          |       ||   _   ||   | |  |  | |
 |  _    ||    ___||  |_|  ||    ___||   |    |   _   ||    _  ||    ___||  _    |      | |_|   ||  |_|  |          |____   ||  |_|  ||   | |   |_| |
 | | |   ||   |___ |       ||   |___ |   |    |  | |  ||   |_| ||   |___ | | |   |      |       ||       |           ____|  ||       ||   | |       |
 | |_|   ||    ___||       ||    ___||   |___ |  |_|  ||    ___||    ___|| |_|   |      |  _   | |_     _|          | ______||       ||   | |  _    |
 |       ||   |___  |     | |   |___ |       ||       ||   |    |   |___ |       |      | |_|   |  |   |            | |_____ |   _   ||   | | | |   |
 |______| |_______|  |___|  |_______||_______||_______||___|    |_______||______|       |_______|  |___|            |_______||__| |__||___| |_|  |__|
 
 
 
 
 
 
 
 `);
}
await welcome();
console.log(chalk.whiteBright("Welcome To Basic ATM"));
async function all() {
    const users = await inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter User Name",
        },
        {
            type: "password",
            name: "password",
            message1: "Enter Your Password"
        },
        {
            type: "list",
            name: "AccountType",
            message1: chalk.yellowBright("Select Any One Option ?"),
            choices: ["Current", "savings", "BalanceInquirey"],
        },
        {
            type: "list",
            name: "TransactionType",
            message1: chalk.yellowBright("Select Any One Option ?"),
            choices: ["Fast Cash", "withdraw",],
            when(users) {
                return users.AccountType !== "BalanceInquirey";
            }
        },
        {
            type: "list",
            name: "amount",
            message1: "Select Any One Option ?",
            choices: [1000, 2000, 3000, 5000, 10000],
            when(users) {
                return users.TransactionType == "Fast Cash";
            }
        },
        {
            type: "input",
            name: "amount",
            message1: "enter amount",
            when(users) {
                return users.TransactionType == "withdraw";
            }
        }
    ]);
    if (users.username && users.password) {
        const UsersBalance = Math.floor(Math.random() * 1000000);
        if (users.AccountType == "BalanceInquirey") {
            console.log(UsersBalance);
        }
        if (users.AccountType !== "BalanceInquirey") {
            const enteredAmount = users.amount;
            const remainingBalance = UsersBalance - enteredAmount;
            console.log(` 
 ${chalk.yellowBright(`Congrajulations ${enteredAmount}  Amount Withdrawed !!!`)} 
  ${chalk.magentaBright(`  Your remaining Balance is ${remainingBalance} `)}
  `);
        }
    }
}
async function Repeat() {
    do {
        await all();
        var reboot = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: chalk.cyanBright("Do You Want To Perform  Any Transaction !! Y or N ?")
            },
        ]);
    } while (reboot.restart == "Y" || reboot.restart == "yes" || reboot.restart == "y" || reboot.restart == "Yes");
}
Repeat();
