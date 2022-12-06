#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
 const start =()=>{
     return new Promise((res)=>{
    setTimeout(res,2000)
 })
}
async function welcome() {
    let rainbowTitle=chalkAnimation.rainbow("Welcome To NPX World")
    await start()
    rainbowTitle.stop()
        console.log(`
   
    
    
    ______   _______  __   __  _______  ___      _______  _______  _______  ______         _______  __   __            _______  _______  ___   __    _ 
    |      | |       ||  | |  ||       ||   |    |       ||       ||       ||      |       |  _    ||  | |  |          |       ||   _   ||   | |  |  | |
    |  _    ||    ___||  |_|  ||    ___||   |    |   _   ||    _  ||    ___||  _    |      | |_|   ||  |_|  |          |____   ||  |_|  ||   | |   |_| |
    | | |   ||   |___ |       ||   |___ |   |    |  | |  ||   |_| ||   |___ | | |   |      |       ||       |           ____|  ||       ||   | |       |
    | |_|   ||    ___||       ||    ___||   |___ |  |_|  ||    ___||    ___|| |_|   |      |  _   | |_     _|          | ______||       ||   | |  _    |
    |       ||   |___  |     | |   |___ |       ||       ||   |    |   |___ |       |      | |_|   |  |   |            | |_____ |   _   ||   | | | |   |
    |______| |_______|  |___|  |_______||_______||_______||___|    |_______||______|       |_______|  |___|            |_______||__| |__||___| |_|  |__|
    
    
    
    
    
    
    
    `)
}
 await welcome()

async function myCalc(){
    const Question= await inquirer
    .prompt([
        {
        type:'list',
        name:'operator',
        message:chalk.yellow((`start your calculation \n`)),
        choices:["Addition","Subtraction","Multiplication","Division"] ,
    },
    {
        type:"number",
        name:"num1",
        message:chalk.yellowBright("enter num 1"),
    },
    {
        type:"number",
        name:"num2",
        message:chalk.yellowBright("enter num 2"),
    }

]);


if(Question.operator=="Addition"){
    console.log(`${Question.num1} + ${Question.num2 } = ${Question.num1 +Question.num2} `)
}else if(
    Question.operator=="Subtraction"
){
    console.log(`${Question.num1} - ${   Question.num2 } = ${Question.num1 - Question.num2} `)
}else if( Question.operator=="Multiplication"){
  console.log( `${Question.num1} * ${Question.num2 } = ${Question.num1 * Question.num2} `);
   
}else if( Question.operator=="Division"){
 console.log(  `${Question.num1} / ${Question.num2 } = ${Question.num1 / Question.num2} `)  ;
}else{
    console.log("select one")
}


}


async function Repeat() {
    do{
 await   myCalc();
var reboot = await inquirer.prompt([

    {
        name:"restart",

        type:"input",
        message:chalk.cyanBright("Do You Want To Start Again!! Y or N ?")
    },
   
])


}while(reboot.restart=="Y"||reboot.restart=="yes"||reboot.restart=="y"||reboot.restart=="Yes")
}

Repeat()
