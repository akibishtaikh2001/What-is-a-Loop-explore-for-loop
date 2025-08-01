let n = 55;

while (n <= 85) {
    n++;

    if (n % 5 === 0) {
        continue;
    }
    if (n % 2 !== 0) {
        console.log(n);
    }

}