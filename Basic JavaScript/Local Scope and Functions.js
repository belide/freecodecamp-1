/**
 * Created by bikramkawan on 8/7/17.
 */

function myLocalScope() {
    'use strict';
    var myVar;

    console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);

// Now remove the console log line to pass the test

