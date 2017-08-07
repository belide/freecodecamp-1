/**
 * Created by bikramkawan on 8/7/17.
 */
function sumAll(arr) {
    const creatArr = new Array(Math.max(...arr) - Math.min(...arr) + 1).fill(Math.min(...arr));
    return creatArr.reduce((prev, cur, index)=>prev + (cur + index));
}
sumAll([1, 4]);
