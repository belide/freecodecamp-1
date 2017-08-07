/**
 * Created by bikramkawan on 8/7/17.
 */

function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num < 0) return '';
    return str.repeat(num);
}

repeatStringNumTimes("abc", 3);
