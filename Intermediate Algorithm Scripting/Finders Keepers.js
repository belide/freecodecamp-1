/**
 * Created by bikramkawan on 8/7/17.
 */

function findElement(arr, func) {
         return arr.filter(func).slice(0,1)[0];
}


findElement([1, 2, 3, 4], function (num) {
    return num % 2 === 0;
});
