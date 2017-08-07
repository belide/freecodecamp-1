/**
 * Created by bikramkawan on 8/7/17.
 */

//No repeats please
function permAlone(str) {
    var permArr = [];
    var remainingChar = [];

    if (typeof str == 'string') {
        str = str.split('');
    }
    const reg = new RegExp(/([a-zA-Z])\1/);

    function calcPerm(str) {
        str.forEach((d, index) => {
            const firstChar = str.splice(index, 1)[0];
            remainingChar.push(firstChar);
            const temp = remainingChar.slice().join('');
            const isDuplicate = reg.test(temp)
            if (str.length === 0 && !isDuplicate) {

                permArr.push(temp);
            }
            calcPerm(str);
            str.splice(index, 0, firstChar);
            remainingChar.pop();
        })
    }

    calcPerm(str);
    return permArr.length;

}

permAlone('aabb');
