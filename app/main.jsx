//http://stackoverflow.com/questions/30371000/react-bootstrap-using-webpack
require('bootstrap/dist/css/bootstrap.css');

import React from 'react';
import {render} from 'react-dom';

// init shell
renderShell();

function renderShell() {
    var shell = document.createElement('div');

    var CommentBox = React.createClass({
        render: function() {
            return (
                <label>
                    Write some text in textbox:
                </label>
            );
        }
    });

    document.body.appendChild(shell);
    render(<CommentBox />, shell);
}