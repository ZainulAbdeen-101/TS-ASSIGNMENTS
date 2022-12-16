#! /usr/bin/env/ node


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

//Promise Made for set timeout
 function animate(){
return new Promise(function(res){
    setTimeout(res,2000)
})
}
//animation message
 async function  animator(){
    let rainbowTitle = chalkAnimation.rainbow("Welcome To NPX World !!!")
    await animate()
    rainbowTitle.stop()
    console.log(`
   
    ______   _______  __   __  _______  ___      _______  _______  _______  ______         _______  __   __            _______  _______  ___   __    _ 
    |      | |       ||  | |  ||       ||   |    |       ||       ||       ||      |       |  _    ||  | |  |          |       ||   _   ||   | |  |  | |
    |  _    ||    ___||  |_|  ||    ___||   |    |   _   ||    _  ||    ___||  _    |      | |_|   ||  |_|  |          |____   ||  |_|  ||   | |   |_| |
    | | |   ||   |___ |       ||   |___ |   |    |  | |  ||   |_| ||   |___ | | |   |      |       ||       |           ____|  ||       ||   | |       |
    | |_|   ||    ___||       ||    ___||   |___ |  |_|  ||    ___||    ___|| |_|   |      |  _   | |_     _|          | ______||       ||   | |  _    |
    |       ||   |___  |     | |   |___ |       ||       ||   |    |   |___ |       |      | |_|   |  |   |            | |_____ |   _   ||   | | | |   |
    |______| |_______|  |___|  |_______||_______||_______||___|    |_______||______|       |_______|  |___|            |_______||__| |__||___| |_|  |__|
    
    `);

console.log(`${chalk.yellowBright(`How to play the game ?`)}
 ${chalk.blueBright(`1.The computer will randomly select a number from 0 to 100.
 2.You have to guess what random number does the computer has selected
 3.You Will get 3 Chances to guess the correct number.
`)}

   ${chalk.bgWhiteBright(chalk.bold(`Wish You Good Luck`))} 
    `)
}

 await animator();

//Functionality Starts From here !!

const guessNumFunc=async function(){

let randomNum= Math.floor(Math.random()*10)

for(let i=0;i<3;i++){
    console.log(`Iteration ${ i }`)
let GuessedNum:{num:number}= await inquirer.prompt([
    {
        name:"num",
        type:'number',
        message:chalk.redBright("guess The Number?")

    }
])


if(randomNum===GuessedNum.num){
    console.log(chalk.cyanBright(`you Guessed Correct ${GuessedNum.num}`)) 
}else{
    console.log(`incorrect!! ${randomNum}`)
}
}
}
guessNumFunc();


