import React from 'react'
import { createStore } from 'redux'
import { Link } from 'react-router'
import { Provider } from 'react-redux'

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1
        case 'DECREMENT_COUNTER':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand">React Fun</a>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/hello">Hello</Link></li>
                                    <li><Link to="/albums">Albums</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App