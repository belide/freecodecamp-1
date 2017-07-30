/**
 * Created by bikramkawan on 7/28/17.
 */
//Validate US Telephone Numbers
function telephoneCheck(str) {
    // Good luck!

    return /^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/.test(str);
}


telephoneCheck("555-555-5555");

//Record Collection

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

    const oKeys = Object.keys(collection);
    oKeys.map((k)=> {
        "use strict";
        if (prop == 'tracks' && k === id.toString()) {
            const temp = (Array.isArray(collection[id][prop])) ? collection[id][prop] : [];
            temp.push(value)
            collection[id][prop] = temp
        }
        if (prop !== 'tracks') {
            collection[id][prop] = value;
        }
    });
    if (value === "")   delete collection[id][prop];


    return collection;
}


// Alter values below to test your code
updateRecords(2548, "artist", "")
updateRecords(5439, "tracks", "Take a Chance on Me")


//Symmetric Difference
function sym(...args) {

    var newArr = args.reduce((acc, val) =>
        acc.concat(val).filter(x => val.indexOf(x) === -1 || acc.indexOf(x) === -1))
        .filter((x, i, self) => self.indexOf(x) == i);
    return newArr;


}

sym([1, 2, 3], [5, 2, 1, 4]);


//Exact Change
function checkCashRegister(price, cash, cid) {
    const values = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    let change = cash * 100 - price * 100;
    let allCash = true;

    let moneyback = cid.reduceRight(function (p, c, i) {
        let out = Math.min(change - change % values[i], c[1] * 100);
        change -= out;
        if (out !== c[1] * 100) {
            allCash = false;
        }
        return out ? p.concat([[c[0], out / 100]]) : p;
    }, []);

    return change > 0 ? "Insufficient Funds" : allCash ? "Closed" : moneyback;
    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);


function updateInventory(arr1, arr2) {
    var temp = 0;
    arr2.map((item) => {
        temp = 0;
        arr1.map((list)=> {
            if (item[1] === list[1]) {
                list[0] += item[0];
                temp = 1;
            }
        });

        if (temp === 0)
            arr1.push(item);
    });


    return arr1.sort((a, b)=>a[1] > b[1] ? 1 : -1);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"],
    [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

    [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]


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


//Make a Person

var Person = function (firstAndLast) {

    let arr = firstAndLast.split(' ');
    this.getFullName = ()=> arr.join(' ');
    this.getFirstName = ()=>arr[0];
    this.getLastName = () => arr[1];
    this.setFirstName = (first)=> arr[0] = first;
    this.setLastName = (last)=> arr[1] = last;
    this.setFullName = (firstAndLast)=> arr = firstAndLast.split(' ');

    return firstAndLast;
};
var bob = new Person('Bob Ross');
bob.getFullName();

//Map the Debris


function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    arr.forEach((item) => {
        const tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
        delete item.avgAlt;
        item.orbitalPeriod = tmp;
    });

    return arr;
}

orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]);

//Pairwise
// Help from FCC it is neat and clean method
function pairwise(arr, arg) {
    let result = 0;

    arr.forEach(function (element, indexOfElement) {
// It's a good idea to always have a variable containing the search value before proceeding
        const searchValue = arg - element;
        if (arr.indexOf(searchValue) > -1 && arr.indexOf(searchValue) != indexOfElement) {
            result += indexOfElement + arr.indexOf(searchValue);
            delete arr[indexOfElement];
            delete arr[arr.indexOf(searchValue)];
        }
    });

    return result;
}
pairwise([1, 4, 2, 3, 0, 5], 7);