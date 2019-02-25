// Recursive solution
function factorial(number) {
    if (number < 0) {
        return console.error();
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let previousFactorial = factorial(number - 1);
        return number * previousFactorial;
    }
}

// Iterative Solution

function factorialIt(number) {
    if (number < 0) {
        console.error('broken');
    } else {
        let result = 1;

        for (let i = number; i >= 2; i--) {
            result = result * i;
        }

        return result;
    }
}