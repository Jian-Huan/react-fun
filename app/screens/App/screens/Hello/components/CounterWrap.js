import { connect } from 'react-redux'
import Counter from './Counter.js'

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
