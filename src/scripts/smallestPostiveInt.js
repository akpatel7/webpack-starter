import '../styles/index.scss';

console.log('Start...');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

var A = [1, 3, 6, 4, 1, 2];

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var smallestPositiveInt = 1;

    function sort(a,b) {
        return a - b;
    }

    A.sort(sort);

    console.log('Sorted', A);

    for(let i in A) {
        if(A[i] > 0 && smallestPositiveInt === A[i]) {
            smallestPositiveInt = A[i] + 1;
        }
    }
    return smallestPositiveInt;
}

var firstMissingPositive = function(nums) {
    var swap = function(i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    };

    for (let i = 0; i < nums.length; i++) {
        while (0 < nums[i] && nums[i] - 1 < nums.length
                && nums[i] != i + 1
                && nums[i] != nums[nums[i] - 1]) {
            swap(i, nums[i] - 1);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};

console.log(solution(A));