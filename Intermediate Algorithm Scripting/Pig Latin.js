/**
 * Created by bikramkawan on 8/7/17.
 */
function translatePigLatin(str) {

    const vowels = ["A", "E", "I", "O", "U"];
    const strArr = str.toUpperCase().split('');
    const vowelIndex = vowels.map((d)=>strArr.indexOf(d)).filter((e)=>e !== -1);
    const nonVowelPrefix = ["A", "Y"];
    const vowelPrefix = ["W", "A", "Y"]
    if (Math.min(...vowelIndex) === 0) {
        return strArr.concat(vowelPrefix).join('').toLowerCase();
    }
    const left = strArr.splice(0, Math.min(...vowelIndex))
    const result = strArr.concat(left).concat(nonVowelPrefix)
    return result.join('').toLocaleLowerCase();
}

translatePigLatin("algorithm");