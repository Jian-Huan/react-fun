import React from 'react'
import { Link, Route } from 'react-router'
import HelloRoute from './screens/Hello/index'
import AlbumListRoute from './screens/Albums/index'

const App = React.createClass({
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
})

export default (
    <Route path="/" component={App}>
        { HelloRoute }
        { AlbumListRoute }
    </Route>
)