function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var items = [];
    var intersections = 0;
    const LIMIT = 10000000;
    
    for(var i=0; i<A.length; i++) {
        items.push({
            base: i,
            start: i - A[i],
            end: i + A[i]
        });
    }
    
    items.sort(function(a, b) {
        return a.start - b.start;
    });
    
    var sameStart = 0;
    for(var i=0; i<items.length; i++) {
        var item = items[i];
        var j=i+1;
        
        while(items[j] && item.end >= items[j].start) {
            if(++intersections > LIMIT) return -1;
            
            if(item.start === items[j++].start) {
                sameStart++;
            }
        }
        
        sameStart = 0;
    }
    
    return intersections;
}
/*
We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of N non-negative integers, specifying the radiuses of the discs, is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:

  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0

  There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

function solution(A);

that, given an array A describing N discs as explained above, returns the number of (unordered) pairs of intersecting discs. The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

https://stackoverflow.com/questions/4801242/algorithm-to-calculate-number-of-intersecting-discs

10

Here's a O(N) time, O(N) space algorithm requiring 3 runs across the array and no sorting, verified scoring 100%:

You're interested in pairs of discs. Each pair involves one side of one disc and the other side of the other disc. Therefore we won't have duplicate pairs if we handle one side of each disc. Let's call the sides right and left (I rotated the space while thinking about it).

An overlap is either due to a right side overlapping another disc directly at the center (so pairs equal to the radius with some care about the array length) or due to the number of left sides existing at the rightmost edge.

So we create an array that contains the number of left sides at each point and then it's a simple sum.

C code:
int solution(int A[], int N) {
    int C[N];
    int a, S=0, t=0;

    // Mark left and middle of disks
    for (int i=0; i<N; i++) {
        C[i] = -1;
        a = A[i];
        if (a>=i) {
            C[0]++;
        } else {
            C[i-a]++;
        }
    }
    // Sum of left side of disks at location
    for (int i=0; i<N; i++) {
        t += C[i];
        C[i] = t;
    }
    // Count pairs, right side only:
    // 1. overlaps based on disk size
    // 2. overlaps based on disks but not centers
    for (int i=0; i<N; i++) {
        a = A[i];
        S += ((a<N-i) ? a: N-i-1);
        if (i != N-1) {
          S += C[((a<N-i) ? i+a: N-1)];
        }
        if (S>10000000) return -1;
    }
    return S;
}

from bisect import bisect_right

def number_of_disc_intersections(A):
    pairs = 0

    # create an array of tuples, each containing the start and end indices of a disk
    # some indices may be less than 0 or greater than len(A), this is fine!
    # sort the array by the first entry of each tuple: the disk start indices
    intervals = sorted( [(i-A[i], i+A[i]) for i in range(len(A))] )

    # create an array of starting indices using tuples in intervals
    starts = [i[0] for i in intervals]

    # for each disk in order of the *starting* position of the disk, not the centre
    for i in range(len(starts)):

        # find the end position of that disk from the array of tuples
        disk_end = intervals[i][1]

        # find the index of the rightmost value less than or equal to the interval-end
        # this finds the number of disks that have started before disk i ends
        count = bisect_right(starts, disk_end )

        # subtract current position to exclude previous matches
        # this bit seemed 'magic' to me, so I think of it like this...
        # for disk i, i disks that start to the left have already been dealt with
        # subtract i from count to prevent double counting
        # subtract one more to prevent counting the disk itsself
        count -= (i+1)
        pairs += count
        if pairs > 10000000:
            return -1
    return pairs

*/