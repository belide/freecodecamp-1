/**
 * Created by bikramkawan on 8/7/17.
 */

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (num <= 3) {
        return str.slice(0, num) + '...';
    }
    if (str.length > 3 && str.length > num) {
        return str.slice(0, num - 3) + '...';

    }

    return str;

}


truncateString("A-tisket a-tasket A green and yellow basket", 11);
