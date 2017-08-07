/**
 * Created by bikramkawan on 8/7/17.
 */
function sym(...args) {

    var newArr = args.reduce((acc, val) =>
        acc.concat(val).filter(x => val.indexOf(x) === -1 || acc.indexOf(x) === -1))
        .filter((x, i, self) => self.indexOf(x) == i);
    return newArr;


}

sym([1, 2, 3], [5, 2, 1, 4]);
