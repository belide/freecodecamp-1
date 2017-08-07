/**
 * Created by bikramkawan on 8/7/17.
 */

function diffArray(arr1, arr2) {
    const filter1 = arr1.filter((d)=>arr2.indexOf(d) === -1);
    const filter2 = arr2.filter((d)=>arr1.indexOf(d) === -1);
    return filter1.concat(filter2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
