/**
 * Created by bikramkawan on 8/7/17.
 */
function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });
    for (var a in arr) {
        if (arr[a] >= num)
            return parseInt(a);
    }
    return arr.length;
}
getIndexToIns([40, 60], 50);
