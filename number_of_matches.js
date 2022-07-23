const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin
});

let str=[];
let str2=[];
let count=0;
const mySet = Array.from({length:20}, () => []);

rl.on('line', (line) => {
    
    if(str.length === 0) {
        str = line.split(' ');
    }
    else {
        str2 = line.split(' ');

    }

}).on('close', () => {


    for(let i=0; i<str.length; i++) {
        mySet[+str[i]%20].push(+str[i]);
    }
        for(let j=0; j<str2.length; j++) {
            if(mySet[+str2[j]%20].includes(+str2[j])) {
                count++;
            }
            else {
                continue;
            }
        }
    console.log(count.toString());
    
   process.exit(0);
});