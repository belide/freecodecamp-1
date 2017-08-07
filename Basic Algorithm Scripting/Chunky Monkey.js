/**
 * Created by bikramkawan on 8/7/17.
 */
function chunkArrayInGroups(arr, size) {
    // Break it up.
    const pushArr = [];
    var prev = 0;
    var next = size;
    for (var i = 0; i < arr.length / size; i++) {
        pushArr.push(arr.slice(prev, next));
        prev = next;
        next = next + size;
    }
    return (pushArr)

    // return arr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
