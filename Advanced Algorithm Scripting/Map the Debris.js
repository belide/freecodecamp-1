/**
 * Created by bikramkawan on 8/7/17.
 */

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