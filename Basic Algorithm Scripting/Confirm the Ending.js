/**
 * Created by bikramkawan on 8/7/17.
 */


function confirmEnding(str, target) {

    var strArr = str.split(' ');
    if (strArr.length === 1) {
        return (str[str.length - 1] === target );
    }
    if (strArr.length !== 1) {
        return ((strArr[strArr.length - 1].split(target)).length > 1);
    }


}


confirmEnding("Bastian", "n");
