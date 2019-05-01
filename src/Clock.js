import React from 'react';

/*
This is a pure component
function Clock(props) {
    return (
        <div>
            <h2>It is {props.date.toLocaleString()}</h2>
        </div>
    )
}
*/

/*
 Converting function to class
 This class has a local state
* */
class Clock extends React.Component {

    // Class should always call the base constructor with props
    constructor(props) {
        super(props);

        // Assign initial this.state
        this.state = {date: new Date()}
    }

    /* ** These are called lifecycle method **
     We want to set up a timer whenever the clock is rendered to the DOM for the first time.
     This is called mounting in REACT
     runs after the component output has been rendered to the DOM.
    */
    componentDidMount() {
        this.timerId = setInterval(() =>
            this.tick(), 1000
        )

    }

    // We also want to clear that timer whenever the DOM produced by the Clock is removed.
    // This is called unmounting in React
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }


    render() {
        return (<div>
            <h1>Hello, world</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>)
    }
}
export default Clock;