import React, { PureComponent } from 'react'

class PriceChildClass extends PureComponent {
    render() {
        return (
            <h3>Data in class component from parent: {this.props.age}</h3>
        )
    }
}

export default PriceChildClass