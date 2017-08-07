/**
 * Created by bikramkawan on 8/7/17.
 */

function largestOfFour(arr) {
    // You can do this!
    var longest = arr.map((d)=>Math.max(...d));

    return longest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
