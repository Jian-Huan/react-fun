//http://stackoverflow.com/questions/30371000/react-bootstrap-using-webpack
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import appRoutes from './screens/App/index'

var renderShell = () => {
    var shell = document.createElement('div');

    document.body.appendChild(shell);
    render(
        <Router history = { browserHistory } routes = { appRoutes } />,
        shell)
};

// init shell
renderShell();