/**
 * Created by bikramkawan on 8/7/17.
 */
var count = 0;

function cc(card) {
    // Only change code below this line

    switch (card) {

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count = count + 1;
            break;
        case 7:
        case 8:
        case 9:
            count = count + 0;
            break;
        case 10:
            count = count - 1;
            break;
        case 'J':
            count = count - 1;
            break;
        case 'Q':
            count = count - 1;
            break;
        case 'K':
            count = count - 1;
            break;
        case 'A':
            count = count - 1;
            break;
        default:

    }

    if (count > 0) {
        return count + " Bet";
    } else if (card === 0) {
        return count + " Hold";
    } else {
        return count + " Hold";
    }

    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display

cc(2);
cc(3);
cc(4);
cc(5);
cc(6);

