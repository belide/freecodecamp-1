/**
 * Created by bikramkawan on 8/7/17.
 */
//Drop it
function dropElements(arr, func) {

    const filterArr = arr.filter(func);
    if (filterArr.length < 1) return filterArr;
    const result = filterArr[0];

    return arr.slice(arr.indexOf(result), arr.length);
}
dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
})