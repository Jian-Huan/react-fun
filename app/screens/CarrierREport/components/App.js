import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
    render() {
        return (
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
        )
    }
}

export default App