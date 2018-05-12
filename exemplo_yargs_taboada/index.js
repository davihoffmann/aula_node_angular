const argv = require('yargs').argv;

let divisor = 1;

while(divisor <=10) {
    console.log(argv.valor * divisor);
    divisor++;
} 
