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

                <div>
                    Write some text in textbox:
                </div>
            );
        }
    });

    document.body.appendChild(shell);
    render(<CommentBox />, shell);
}