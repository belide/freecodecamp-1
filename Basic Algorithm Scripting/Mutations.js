/**
 * Created by bikramkawan on 8/7/17.
 */
function mutation(arr) {

    const arr1 = arr[0].split('').map(d=>d.toUpperCase());
    const arr2 = arr[1].split('').map(d=>d.toUpperCase());
    const re = arr2.map((d)=>arr1.indexOf(d) !== -1);


    return (re.filter(d=>d === true).length == arr2.length) ? true : false;
}
mutation(["hello", "hey"]);
