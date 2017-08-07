/**
 * Created by bikramkawan on 8/7/17.
 */

function titleCase(str) {

    var strArr = str.split(' ');
    var combined = [];

    for (var i = 0; i < strArr.length; i++) {
        var first = strArr[i].slice(0, 1);
        var rest = strArr[i].slice(1, str.length).toLowerCase();
        combined.push(first.toUpperCase() + rest);

    }


    return combined.join(' ');
}

titleCase("sHoRt AnD sToUt")

