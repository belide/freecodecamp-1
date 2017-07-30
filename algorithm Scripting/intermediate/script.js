/**
 * Created by bikramkawan on 7/28/17.
 */
//Sum all numbers in a Range

function sumAll(arr) {
    const creatArr = new Array(Math.max(...arr) - Math.min(...arr) + 1).fill(Math.min(...arr));
    const sum = creatArr.reduce((prev, cur, index)=>prev + (cur + index));
    return sum;
}

sumAll([1, 4]);

// Diff Two Arrays
function diffArray(arr1, arr2) {
    const filter1 = arr1.filter((d)=>arr2.indexOf(d) === -1);
    const filter2 = arr2.filter((d)=>arr1.indexOf(d) === -1);
    return filter1.concat(filter2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// Roman Numeral Converter

function convertToRoman(num) {
    const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (var i = 0; i < decimals.length; i++) {
        if (num < 1)
            return "";
        if (num >= decimals[i]) {
            return roman[i] + convertToRoman(num - decimals[i]);
        }
    }
}
convertToRoman(36);

//Wherefore art thou

function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    const result = collection.filter((d)=> {
        const res = sourceKeys.map((t)=> d[t] === source[t])
            .filter((g)=>g !== false);

        return (res.length == sourceKeys.length) ? d : '';


    })

    return result;
}


whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"})

whatIsInAName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "b": 2})


//Search and Replace


function myReplace(str, before, after) {
    const strArr = str.split(' ');
    const checkCapitalize = before[0].slice().toUpperCase() === before[0];
    const newAfter = checkCapitalize ? after.charAt(0).toUpperCase() + after.slice(1) : after;

    strArr.splice(strArr.indexOf(before), 1, newAfter);

    return strArr.join(' ');
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")


//Pig Latin

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


//DNA Pairing

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

//Missing letters

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


//Boo who

function booWho(bool) {
    return (typeof bool === 'boolean') ? true : false;
}

booWho(true);


//Sorted Union


function uniteUnique(arr1, arr2, arr3, arr4) {

    const arr = [arr1, arr2, arr3, arr4].filter((d)=>d !== undefined);
    const res = arr.reduce((a, b)=>a.concat(b));
    const r = res.filter((d, index, self)=>res.indexOf(d) === index)
    return r;
}

uniteUnique([1, 2, 3], [5, 2, 1])


//Convert HTML Entities

function convertHTML(str) {

    const res = str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, "&apos;");
    return res;
}


convertHTML("Dolce & Gabbana");


//Spinal Tap Case

function spinalCase(str) {

    let lower = str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/ /g, '-').replace(/_/g, '-').toLowerCase();

    return lower;
}


spinalCase('thisIsSpinalTap');


//Sum All Odd Fibonacci Numbers
function sumFibs(num) {

    const fibNumbers = [1];
    for (var i = 1; i <= num;) {
        fibNumbers.push(i);
        i = fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];
    }
    const lessThan = fibNumbers.filter((d)=>d % 2 != 0).reduce((prev, acc)=>prev + acc);
    return lessThan;
}

sumFibs(75025);


//Sum All Primes
function sumPrimes(num) {
    const makeArray = Array.from({length: num + 1}, (v, k) => k).slice(2);
    const isPrime = (number) => {
        for (i = 2; i <= number; i++) {
            if (number % i === 0 && number != i) {
                return false;
            }
        }
        return true;
    }
    const filtered = makeArray.filter(isPrime);
    return filtered.reduce((d, e)=>d + e)
}

sumPrimes(977);


//Smallest Common Multiple
function smallestCommons(arr) {

    var makeArray = Array.from({length: Math.max(...arr) + 1}, (v, k) => k).slice(Math.min(...arr));
    let initialLCM = makeArray[0];
    const result = makeArray.reduce((prev, current)=> {
        "use strict";
        let GCD = gcd(initialLCM, current);
        initialLCM = (initialLCM * current) / GCD;
        return initialLCM


    })
    return result;


    function gcd(x, y) {    // Implements The Euclidean Algorithm
        if (y === 0)
            return x;
        else
            return gcd(y, x % y);
    }
}


smallestCommons([1, 13]);


//Finders Keepers

function findElement(arr, func) {
    return arr.filter(func).slice(0, 1)[0];
}

findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
})

//Drop it
function dropElements(arr, func) {

    const filterArr = arr.filter(func);
    if (filterArr.length < 1) return filterArr;
    let result = filterArr[0];

    return arr.slice(arr.indexOf(result), arr.length);
}
dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
})

//Steamroller
function steamrollArray(arr) {
    let flattenArr = [].concat(...arr);
    return flattenArr.some(Array.isArray) ? steamrollArray(flattenArr) : flattenArr;

}

steamrollArray([1, [2], [3, [[4]]]]);

//Binary Agents


function binaryAgent(str) {


    return String.fromCharCode(...str.split(" ")
        .map((char) => parseInt(char, 2)));

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


//Everything Be True


function truthCheck(collection, pre) {

    return collection.every(objElem => objElem[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {"user": "Po", "sex": "female"}], "sex");

//Arguments Optional

function addTogether(...arg) {
    var argArr = Array.from(arg);
    return argArr.some(n => typeof n !== 'number') ?
        undefined :
        argArr.length > 1 ?
            argArr.reduce((acc, n) => acc += n, 0) :
            (n) => typeof n === "number" ?
            n + argArr[0] :
                undefined;
}
addTogether(2)(3)

