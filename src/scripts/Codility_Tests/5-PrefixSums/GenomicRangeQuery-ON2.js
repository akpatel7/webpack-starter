import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const S = 'CAGCCTA';
const P = [];
const Q = [];

P[0] = 2; Q[0] = 4;
P[1] = 5; Q[1] = 5;
P[2] = 0; Q[2] = 6;

function solution(S, P, Q) {
    console.log(P);
    console.log(Q);
    // write your code in JavaScript (Node.js 8.9.4)
    if(!P || !Q || P.length !== Q.length || P.length < 1 || Q.length < 1) {
        return [];
    }
    const M = P.length;
    const queryResults = new Array(M);
    queryResults.fill(Number.MAX_SAFE_INTEGER);
    const sequence = S.split('');
    console.log(sequence);
    for(let m = 0; m < M; m++) {
        let start = P[m];
        let end = Q[m];
        console.log('start', start);
        console.log('end', end);
        for(let i = start; i <= end; i++) {
            if(sequence[i] === 'A') {
                queryResults[m] = Math.min(queryResults[m], 1);
                console.log('A');
                console.log(queryResults);
            }
            else if(sequence[i] === 'C') {
                queryResults[m] = Math.min(queryResults[m], 2);
                console.log('C');
                console.log(queryResults);
            }
            else if(sequence[i] === 'G') {
                queryResults[m] = Math.min(queryResults[m], 3);
                console.log('G');
                console.log(queryResults);
            }
            else {
                queryResults[m] = Math.min(queryResults[m], 4);
                console.log('T');
                console.log(queryResults);
            }
        }
    }
    return queryResults;
}

console.log(solution(S, P, Q));

/*
A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

function solution(S, P, Q);

that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

Result array should be returned as an array of integers.

For example, given the string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [1..50,000];
each element of arrays P, Q is an integer within the range [0..N − 1];
P[K] ≤ Q[K], where 0 ≤ K < M;
string S consists only of upper-case English letters A, C, G, T.
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/