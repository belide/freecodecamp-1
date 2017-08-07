/**
 * Created by bikramkawan on 8/7/17.
 */

//Sum All Odd Fibonacci Numbers
function sumFibs(num) {

    const fibNumbers = [1];
    for (var i = 1; i <= num;) {
        fibNumbers.push(i);
        i = fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];
    }

    return fibNumbers.filter((d)=>d % 2 != 0).reduce((prev, acc)=>prev + acc);
}


sumFibs(4);
