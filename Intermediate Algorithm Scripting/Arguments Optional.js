/**
 * Created by bikramkawan on 8/7/17.
 */
function addTogether(...arg) {
    var argArr = Array.from(arg);
    return argArr.some(n => typeof n !== 'number') ?
        undefined :
        argArr.length > 1 ?
            argArr.reduce((acc, n) => acc += n, 0) :
            (n) => typeof n === "number" ?
            n + argArr[0] :
                undefined;
}
addTogether(2)(3)