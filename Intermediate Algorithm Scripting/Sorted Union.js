/**
 * Created by bikramkawan on 8/7/17.
 */
function uniteUnique(arr1, arr2, arr3, arr4) {

    const arr = [arr1, arr2, arr3, arr4].filter((d)=>d !== undefined);
    const res = arr.reduce((a, b)=>a.concat(b));
    return res.filter((d, index, self)=>res.indexOf(d) === index);
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
