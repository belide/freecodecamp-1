/**
 * Created by bikramkawan on 8/7/17.
 */

function pairElement(str) {

    const dict = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    };
    const stArr = str.split('');

    return stArr.map((d)=>[d, dict[d]]);
}

pairElement("ATCGA")