/**
 * Created by bikramkawan on 8/7/17.
 */
function destroyer(arr, arg1, arg2, arg3) {
    // Remove all the values
    const res = arr.filter(d=>d !== arg1).filter(e=>e !== arg2).filter(e=>e !== arg3);

    return res;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
