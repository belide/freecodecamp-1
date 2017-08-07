/**
 * Created by bikramkawan on 8/7/17.
 */

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

