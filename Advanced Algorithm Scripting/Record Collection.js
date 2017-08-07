/**
 * Created by bikramkawan on 8/7/17.
 */
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
