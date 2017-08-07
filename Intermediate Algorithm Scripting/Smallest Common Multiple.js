/**
 * Created by bikramkawan on 8/7/17.
 */
function smallestCommons(arr) {

    var makeArray = Array.from({length: Math.max(...arr) + 1}, (v, k) => k).slice(Math.min(...arr));
    let initialLCM = makeArray[0];
    const result = makeArray.reduce((prev, current)=> {
        "use strict";
        let GCD = gcd(initialLCM, current);
        initialLCM = (initialLCM * current) / GCD;
        return initialLCM


    })
    return result;


    function gcd(x, y) {    // Implements The Euclidean Algorithm
        if (y === 0)
            return x;
        else
            return gcd(y, x % y);
    }
}


smallestCommons([1, 13]);