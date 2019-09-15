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

/*
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

class Solution { public int solution(int[] A); }

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/
