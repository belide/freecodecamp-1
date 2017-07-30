var HelloComponent = React.createClass({
    render: function () {
        return (
            <h1>Hello, World!</h1>
        )
    }
})

var myobj = {c1:HelloComponent};
console.log(myobj)