/**
 * Created by bikramkawan on 8/7/17.
 */

function testLogicalOr(val) {
    // Only change code below this line

    if (val > 20 || val < 10) {
        console.log(val);
        return "Outside";
    }


    // Only change code above this line
    return "Inside";
}

// Change this value to test
testLogicalOr(15);
