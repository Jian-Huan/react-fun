import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

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

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
    return {
        value: state
    }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({ type: 'INCREMENT_COUNTER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
