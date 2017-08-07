/**
 * Created by bikramkawan on 8/7/17.
 */

function reverseString(str) {
    var a = [];
    for (var i = 0; i < str.length; i++) {
        a.push(str[i]);
    }

    return a.reverse().join('');
}

reverseString("hello");
