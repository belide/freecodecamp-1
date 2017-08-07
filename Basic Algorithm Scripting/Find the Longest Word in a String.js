/**
 * Created by bikramkawan on 8/7/17.
 */

function findLongestWord(str) {
    var a;
    var count = 0;
    var str = str.split(" ");
    for (var i = 0; i < str.length; i++) {

        if (str[i].length > count) {
            count = str[i].length;
            a = {l: count, i: i};
        }

    }

    return a.l;
}

findLongestWord("The quick brown fox jumped over the lazy dog");