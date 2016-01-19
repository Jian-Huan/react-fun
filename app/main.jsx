import React from 'react';
import {render} from 'react-dom';

// init shell
renderShell();

function renderShell() {
    var shell = document.createElement('div');
    var CommentBox = React.createClass({
        render: function() {
            return (
                <div className="commentBox">
                    Hello, world! I am a CommentBox.
                </div>
            );
        }
    });

    document.body.appendChild(shell);
    render(<CommentBox />, shell);
}