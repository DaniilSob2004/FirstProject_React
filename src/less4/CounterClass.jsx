import React, { PureComponent } from 'react'

class CounterClass extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    plus() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <>
                <h2>Counter Class</h2>
                <span>{this.state.count}</span>
                <button onClick={() => this.plus()}>+</button>
            </>
        )
    }
}

export default CounterClass