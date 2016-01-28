import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    render() {
        const { increment, value } = this.props
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={increment}>+</button>
            </p>
        )
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

export default Counter