import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//const A = [3, 8, 9, 7, 6];
const A = [];
const K = 3;

function rotate(A) {
    const length = A.length;
    let last = A[length - 1];
    for(let i = length - 1; i >= 0; i-- ) {
        A[i] = A[i - 1];
    }
    A[0] = last;
    return A;
}

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!A || A.length === 0 || A.length === 1) {
        return A;
    }
    for(let i=0; i<K; i++) {
        rotate(A);
    }
    return A;
}

console.log(A);
console.log(solution(A, K));