let n = 1

while (n <= 40) {
    n++;

    if (n % 2 !== 0) {
        continue;
    }

    console.log(n);
}