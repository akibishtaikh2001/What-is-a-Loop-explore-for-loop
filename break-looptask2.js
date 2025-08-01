let n = 1;
let sum = 0;

while (n < 200) {



    sum = sum + n;
    console.log('number:', n);
    console.log('total number of sum', sum);


    if (sum >= 100) {
        break;
    }
    n++;




}