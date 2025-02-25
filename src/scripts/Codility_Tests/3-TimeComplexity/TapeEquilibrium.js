import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [];
A[0] = 3;
A[1] = 1;
A[2] = 2;
A[3] = 4;
A[4] = 3;

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var lower = [A.length];
    var upper = [A.length];
    
    lower.push(0);
    
    for(var i=0; i<A.length; i++) {
        var iRev = A.length - i - 1;
        
        if(i === 0) {
            lower[i] = 0;
        } else {
            lower[i] = lower[i-1] + A[i-1];
        }       
        
        if(iRev === A.length - 1) {
            upper[iRev] = A[iRev];
        } else {
            upper[iRev] = upper[iRev+1] + A[iRev];
        }        
    }
    
    var result = Math.abs(lower[1] - upper[1]);
    
    for(var i=2; i<lower.length; i++) {
        var diff = Math.abs(lower[i] - upper[i]);
        if(diff < result) {
            result = diff;
        }
    }
    
    return result;
}

console.log(solution(A));

/*
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/