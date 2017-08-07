/**
 * Created by bikramkawan on 8/7/17.
 */

function myReplace(str, before, after) {
    const strArr = str.split(' ');
    const checkCapitalize = before[0].slice().toUpperCase() === before[0];
    const newAfter = checkCapitalize ? after.charAt(0).toUpperCase() + after.slice(1) : after;

    strArr.splice(strArr.indexOf(before), 1, newAfter);

    return strArr.join(' ');
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")