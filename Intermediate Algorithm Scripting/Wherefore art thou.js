/**
 * Created by bikramkawan on 8/7/17.
 */
function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    const result = collection.filter((d)=> {
        const res = sourceKeys.map((t)=> d[t] === source[t])
            .filter((g)=>g !== false);

        return (res.length == sourceKeys.length) ? d : '';

    })

    return result;
}
whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"})

whatIsInAName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "b": 2})