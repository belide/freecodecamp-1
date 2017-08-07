/**
 * Created by bikramkawan on 8/7/17.
 */

//Make a Person

var Person = function (firstAndLast) {

    let arr = firstAndLast.split(' ');
    this.getFullName = ()=> arr.join(' ');
    this.getFirstName = () =>arr[0];
    this.getLastName = () => arr[1];
    this.setFirstName = (first)=> arr[0] = first;
    this.setLastName = (last)=> arr[1] = last;
    this.setFullName = (firstAndLast)=> arr = firstAndLast.split(' ');

    return firstAndLast;
};
var bob = new Person('Bob Ross');
bob.getFullName();