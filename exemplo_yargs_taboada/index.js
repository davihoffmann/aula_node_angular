const argv = require('yargs').argv;

let divisor = 1;

while(divisor <=10) {
    console.log(argv.valor * divisor);
    divisor++;
} 

// linha de comando para rodar o arquivo - node index.js --valor 2