//http://stackoverflow.com/questions/30371000/react-bootstrap-using-webpack
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appRoutes from './screens/CarrierReport/index'
import counter from '../reducers/counter'

const store = createStore(counter);

render(
    <Provider store={store}>
        <Router history = { browserHistory } routes = { appRoutes } />
    </Provider>,
    document.getElementById('content')
)
