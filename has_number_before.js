const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', str => {
    const arr = str.split(' ');
    const mySet = Array.from({length:30}, () => []);
    
    
    if(new Set(arr).size===2) {
        console.log('NO', '\nYES'.repeat(arr.length-2));
        process.exit(0);
    }
    else {
        for(let i=0; i<arr.length; i++) {
            if(mySet[+arr[i]%30].length===0) {
                mySet[+arr[i]%30].push(+arr[i]);
                    console.log(`NO`);
            } else if(mySet[+arr[i]%30].includes(+arr[i])) {
                console.log(`YES`);
    
            }
            else {
                mySet[+arr[i]%30].push(+arr[i]);
                        console.log(`NO`);
    
            }
                
            }

    }

    

}).on('close', () => {
    process.exit(0);
});