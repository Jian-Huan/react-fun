import React from 'react'
import Route from 'react-router'
import App from './components/App'
import HelloRoute from './screens/Hello/index'
import AlbumListRoute from './screens/Albums/index'

export default (
    <Route path="/" component={App}>
        { HelloRoute }
        { AlbumListRoute }
    </Route>
)