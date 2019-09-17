import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const S = "{[()()]}"; //1
const T = "([)()]"; //0
const a = ""; //1
const b = "VW"; //1
const c = "(U)"; //1
const d = "{{U}"; //0
const e = "[U]"; //1
const f = "{U}"; //1
const g = "{UV}({[A]})"; //1
const h = "{UV}({[A]}){UV}({[A]}){UV}({[A]}){UV}({[A]})"; //1
const i = "{UV}({[A]}){}({[A]}){UV}({[A]})"; //1
const j = "[{UV}({[A]})({[A]}){UV}({[A]}))"; //0

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let expression = S.split('');

    if(expression.length === 0) {
        return 1;
    }

    let stack = [];
    let stackLastIndex = -1;

    for(let i = 0; i < expression.length; i++) {
        if(opener(expression[i])) {
            stack.push(expression[i]);
            ++stackLastIndex; 
            //console.log('push', expression[i]);
        }
        if(closer(expression[i])) {
            if(stack.length > 0) {
                if(matchBrackets(stack[stackLastIndex],expression[i])){
                    let e = stack.pop();
                    --stackLastIndex;
                    //console.log('pop', e);
                }
            }
            else {
                stack.push(expression[i]);
                ++stackLastIndex; 
                //console.log('push', expression[i]);
            }
        }
    }
    console.log('stack', stack);
    if(stack.length === 0){
        return 1;
    }

    return 0;
}

function opener(s) {
    return s === '{' || s === '[' || s === '(';
}

function closer(s) {
    return s === '}' || s === ']' || s === ')';
}

function matchBrackets(s,t) {
    return (s === '(' && t === ')') || (s === '{' && t === '}') || (s === '[' && t === ']');
}

console.log(solution(S));
console.log(solution(T));
console.log(solution(a));
console.log(solution(b));
console.log(solution(c));
console.log(solution(d));
console.log(solution(e));
console.log(solution(f));
console.log(solution(g));
console.log(solution(h));
console.log(solution(i));
console.log(solution(j));

/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

function solution(S) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var i = 0;
    var stack = [];
    
    if(S.length % 2 === 1) {
        return 0;
    }
    
    for(i=0; i<S.length; i++) {
        var char = S.charAt(i);
        if(isOpener(char)) {
            stack.push(char);
        } else {
            if(stack.length === 0) {
                return 0;
            } else {
                var lastChar = stack.pop();
                if(!checkCloser(lastChar, char)) {
                    return 0;
                }
            }
        }
    }
    
    if(stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
}

function isOpener(char) {
    return char === '{' || char === '[' || char === '(' ? true : false;
}

function checkCloser(opener, closer) {
    if(opener === '(' && closer === ')') return true;
    if(opener === '[' && closer === ']') return true;
    if(opener === '{' && closer === '}') return true;
    
    return false;
}
*/