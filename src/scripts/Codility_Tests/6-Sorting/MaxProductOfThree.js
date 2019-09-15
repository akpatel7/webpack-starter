import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [];

A[0] = -3;
A[1] = 1;
A[2] = 2;
A[3] = -2;
A[4] = 5;
A[5] = 6;

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    A.sort(function(a, b) {
        return Math.abs(b) - Math.abs(a);
    });
    
    var positiveCount = 0;
    var negativeCount = 0;
    var zeroCount = 0;
    
    for(var i=0; i<A.length; i++) {
        if(A[i] > 0) {
            positiveCount++;
        } else if(A[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }
    
    //console.log('positive, negative, zero:', positiveCount, negativeCount, zeroCount);
    
    if(positiveCount === 0) {
        if(zeroCount === 0) {
            return A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
        } else {
            return 0;
        }
    } else {
        if(negativeCount === 1) {
            var counter = 0;
            var max = 1;
            
            for(var i=0; i<A.length; i++) {
                if(A[i] > 0) {
                    counter++;
                    max *= A[i];
                    if(counter === 3) {
                        return max;
                    }
                }
            }
        } else {
            negativeCount = 0;
            var max = 1;
            for(var i=0; i<A.length; i++) {
                if(A[i] < 0) negativeCount++;
                if(i<2) {
                    max *= A[i];
                } else {
                    if(max < 0 && A[i] < 0) {
                        max *= A[i];
                        return max;
                    } else if(max > 0 && A[i] > 0) {
                        max *= A[i];
                        return max;
                    }
                }
            }
        }
    }
}

console.log(solution(A));

/*
A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/