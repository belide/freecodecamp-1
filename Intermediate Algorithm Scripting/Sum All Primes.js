/**
 * Created by bikramkawan on 8/7/17.
 */
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
