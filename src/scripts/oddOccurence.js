import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


const A = [9,3,9,3,9,7,9,7,15];

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!A || A.length < 1) {
        return undefined;
    }
    let oddOccurence = A[0];
    let occurences = {};
    occurences[A[0]] = 1;
    for (let i = 1; i < A.length; i++ ) {
        if (occurences[A[i]]) {
            delete occurences[A[i]];
        }
        else {
            occurences[A[i]] = 1;
        }
        console.log(occurences);
    }
    console.log('final', occurences);
    oddOccurence = parseInt(Object.keys(occurences)[0]);
    console.log(oddOccurence);
    return oddOccurence;
}

console.log(solution(A));