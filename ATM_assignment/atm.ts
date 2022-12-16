
interface account{
    "username":string;
    "password":number;
    "customerName": string;
    "customerBalance": number;
}


let accounts:account[]=[]

accounts.push({
    username:"Zain",
    password:1234,
    customerName:"taj ",
    customerBalance:12000,
})
accounts.push({
    username:",Shabbir",
    password:1234,
    customerName:"Rana",
    customerBalance:10000
})
console.log("Welcome To Basic ATM")

const users=inquirer.prompt([

])