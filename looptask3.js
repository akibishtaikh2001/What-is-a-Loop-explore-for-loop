//------------Subtask-1----------------

let num = 81;
let sum = 0;

while(num <= 131){
    if(num % 2 === 1){
        console.log('odd number:', num);
        sum = sum + num;
        console.log('Sum of all the odd numbers:', sum);
    }
    // console.log(num);
    num++;
}

//----------------Subtask-2------------------

let num2 = 206;
let sum2 = 0;

while(num2 <= 311){
    if(num2 % 2 === 0){
        console.log('even number:', num2);
        sum2 = sum2 + num2;
        console.log('Sum of all the even numbers:', sum2);
    }
    // console.log(num2);
    num2++;
}