/**
 * Created by bikramkawan on 8/7/17.
 */

function palindrome(str) {
    // Good luck!
    var a = [];
    var str = str.toUpperCase().replace(/[^a-z0-9]/gi, '');

    for (var i = 0; i < str.length; i++) {
        a.push(str[i]);
    }

    var b = a.slice().reverse();

    for (var i = 0; i < str.length; i++) {
        if ((a[i] !== b[i])) {
            return false;
        }
    }
    return true;
}


palindrome("eye");
