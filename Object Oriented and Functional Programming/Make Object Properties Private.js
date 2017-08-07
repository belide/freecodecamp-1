/**
 * Created by bikramkawan on 8/7/17.
 */

var Car = function () {
    // this is a private variable
    var speed = 10;

    // these are public methods
    this.accelerate = function (change) {
        speed += change;
    };

    this.decelerate = function () {
        speed -= 5;
    };

    this.getSpeed = function () {
        return speed;
    };
};

var Bike = function () {

    var gear;

    // these are public methods


    this.setGear = function (num) {
        gear = num;
    };

    this.getGear = function () {
        return gear;
    };

};

var myCar = new Car();

var myBike = new Bike();
