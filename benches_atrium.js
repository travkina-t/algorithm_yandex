const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin
});

let nums=[];
let numbers=[];
let res=[];

rl.on('line', (num) => {
    nums.push(num);

}).on('close', () => {
 let [l, k] = nums[0].split(' ');
    numbers = nums[1].split(' ');
    if((+l%2===1) && (numbers.includes(`${Math.floor(+l/2)}`))) {
        console.log(Math.floor(+l/2).toString());
        process.exit(0);
    }

    else {
        for (let i=0; i<numbers.length;i++) {
            if (+numbers[i]>=Math.floor(+l/2))  {
                res.push(+numbers[i-1]);
                res.push(+numbers[i]);
                console.log(res.join(' '));
                process.exit(0);
            }
            else {
                continue;
            }
        }
    }

    
      
});