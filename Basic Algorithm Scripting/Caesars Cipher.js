/**
 * Created by bikramkawan on 8/7/17.
 */

function rot13(str) { // LBH QVQ VG!
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const arr = str.split('');
    const res = arr.map((d)=> {
        if (alphabet.indexOf(d.toLowerCase()) > 12) {
            return alphabet[alphabet.indexOf(d.toLowerCase()) - 13]
        } else if (alphabet.indexOf(d.toLowerCase()) === -1) {
            return d;
        }
        else {
            return alphabet[alphabet.indexOf(d.toLowerCase()) + 13];
        }
    });

    return res.join('').toUpperCase();
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
