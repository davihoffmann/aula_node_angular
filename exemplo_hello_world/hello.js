console.log("olá mundo");
const fs = require("fs");
const os = require("os");

let user = os.userInfo();

fs.appendFileSync("texto.txt", "nome do usuário\n");
fs.appendFileSync("texto.txt", `Username : ${user.username}\n `);
fs.appendFileSync("texto.txt", `Home Folder : ${user.homedir}\n \n `);
console.log(user);