import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = 6;
const B = 11;
const K = 2;

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    if(A === B && A % K !== 0) {
        return 0;
    } else if(A === B && A % K === 0) {
        return 1;
    }
    
    var total = parseInt(B/K) - (A > 0 ? parseInt((A-1)/K) : 0);
    
    if(A === 0) total++;
    
    return total;
}


console.log(solution(A, B, K));

/*
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/