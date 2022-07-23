const readline = require('readline');
const rl=readline.createInterface({
    input:process.stdin
});

let numbers = [];
let maxDistance = [];

rl.on('line', (str) => {
    numbers.push(...str.split(' '));
}). on('close', ()=> {
    for (let i=0; i<numbers.length; i++) {
        let magazL, magazR;
        if(numbers[i]==='1') {
            for(let j=i-1; j>=0;j--) {
                if(numbers[j]==='2') {
                    magazL = i-j;
                    break;
                }
                else {
                    continue;
                }
            }
    
            for(let k=i+1; k<=numbers.length;k++) {
                if(numbers[k]==='2') {
                    magazR = k-i;
                    break;
                }
                else {
                    continue;
                }
            }

            if(magazL && magazR) {
                maxDistance.push(Math.min(magazL, magazR));
            }
            else if(magazL) {
                maxDistance.push(magazL);
            }
            else if(magazR) {
                maxDistance.push(magazR);
            }

        }

else {
    continue;
}
}

console.log(Math.max(...maxDistance));
});
