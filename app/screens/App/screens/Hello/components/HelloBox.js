import React from 'react'
import HelloTextInput from './HelloTextInput'

class HelloBox extends React.Component {
    constructor() {
        super();
        this._handleUserInput = this._handleUserInput.bind(this);
        this.state = {
            inputText: ''
        };
    }

    render() {
        return (
            <div className="container">
                <span>Write some text in textbox: </span>
                <HelloTextInput inputText={this.state.inputText} onUserInput={this._handleUserInput}/>
                <h1>Hello {this.state.inputText}</h1>
            </div>
        );
    }

    _handleUserInput(text) {
        this.setState({inputText: text})
    }
}

export default HelloBox