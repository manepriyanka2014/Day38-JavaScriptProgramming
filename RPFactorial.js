const number = prompt('Enter a number: ');
let fact = 1;

for (i = 2; i <= number; i++) {
    fact = fact * i;
}
console.log("Factorial of " + number + " is " + fact);

//Prime factor
const number = prompt('Enter any number to print its prime factors: ')

let isPrime = 0;

for (i = 2; i <= number; i++) {
    if (number % i == 0) {
        isPrime = 1;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = 0;
            }
        }
        if (isPrime == 1) {
            console.log(i);
        }
    }
}

    