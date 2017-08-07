/**
 * Created by bikramkawan on 8/7/17.
 */
function fearNotLetter(str) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const newArr = str.split('');
    const indices = newArr.map((d)=>alphabet.indexOf(d));
    let index = indices.slice(1)
        .map((d, index)=> d - indices[index])
        .indexOf(2);

    return (index === -1) ? undefined : alphabet[index + 1];
}

fearNotLetter("bcd");