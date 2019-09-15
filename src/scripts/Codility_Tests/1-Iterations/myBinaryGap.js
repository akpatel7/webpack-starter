import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let number = N;
    let binary = '';
    let digit = 0;
    let count = -1;
    let max = 0;
    while (number > 0) {
        digit = number % 2;
        console.log(digit);
        if (digit === 1) {
            max = count > max ? count : max;
            count = 0;
        }
        if (digit === 0 && count >= 0) {
            count++;
        }

        binary = '' + digit + binary;
        number = parseInt(number / 2);
    }
    console.log(N, 'binary', binary);
    return max;
}

console.log(solution(529));