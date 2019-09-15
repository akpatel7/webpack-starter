import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [4];

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!A || A.length === 0) {
        return 1;
    }
    if(A.length === 1) {
        return A[0] === 1 ? 2 : 1;
    }
    let missing = 1;
    A.sort((a,b) => a - b);
    for(let i=0; i < A.length; i++){
        if(A[i] === missing) {
            missing = A[i] + 1;
        }
    }
    return missing;
}

console.log(solution(A));

/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited
*/