/**
 * Created by bikramkawan on 8/7/17.
 */

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/ /g, '-').replace(/_/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
