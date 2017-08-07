/**
 * Created by bikramkawan on 8/7/17.
 */
function truthCheck(collection, pre) {

    return collection.every(objElem => objElem[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {"user": "Po", "sex": "female"}], "sex");
