import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    render() {
        //const { increment, value } = this.props
        return (
            <p>
                Clicked: {this.props.value} times
                {' '}
                <button onClick={this.props.increment}>+</button>
            </p>
        )
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

export default Counter
