/**
 * Created by bikramkawan on 8/7/17.
 */
//Pairwise
// Help from FCC it is neat and clean method
function pairwise(arr, arg) {
    let result = 0;

    arr.forEach(function (element, indexOfElement) {
// It's a good idea to always have a variable containing the search value before proceeding
        const searchValue = arg - element;
        if (arr.indexOf(searchValue) > -1 && arr.indexOf(searchValue) != indexOfElement) {
            result += indexOfElement + arr.indexOf(searchValue);
            delete arr[indexOfElement];
            delete arr[arr.indexOf(searchValue)];
        }
    });

    return result;
}
pairwise([1, 4, 2, 3, 0, 5], 7);