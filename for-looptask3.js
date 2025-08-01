// subtask - 1
let total = 0;
for (let i = 91; i <= 129; i++) {
    if(i % 2 !== 0){
        total = total + i;
        // console.log(i);
        
    }

}

console.log('total of all the odd numbers', total);


// subtask - 2

let sum = 0;
for (let i = 51; i <= 85; i++) {
    if(i % 2 === 0){
        sum = sum + i;
        // console.log(i);
        
    }

}

console.log('total of all the even numbers', sum);

