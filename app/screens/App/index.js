import React from 'react'
import Route from 'react-router'
import HelloBox from  './screens/Hello/HelloBox'
import HelloRoute from './screens/Hello/index'
import AlbumListRoute from './screens/Albums/index'

export default (
    <Route path="/">
        { HelloRoute }
        { AlbumListRoute }
    </Route>
)