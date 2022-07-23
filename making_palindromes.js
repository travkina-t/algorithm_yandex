const readline = require('readline');
const rl=readline.createInterface({
    input:process.stdin
});

let stringOne;
let count = 0;


rl.on('line', (str) => {
stringOne = str;
}).on('close', () => {
    for (let i=0; i<Math.ceil(stringOne.length/2); i++) {
        if(stringOne.split('')===stringOne.split('').reverse()) {
            console.log(count);
            process.exit(0);
        }

        if(stringOne[i]===stringOne[stringOne.length - (i + 1)]) {
            continue;
        }
        else {
            stringOne = stringOne.replace(stringOne[i], `${stringOne[stringOne.length - (i+1)]}`);
            count++;

    }

}
    console.log(count);
});