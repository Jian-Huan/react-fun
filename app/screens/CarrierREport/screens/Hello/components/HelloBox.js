import React from 'react'
import TextInput from 'components/TextInput'

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
            <div>
                <span>Write some text in textbox: </span>
                <TextInput inputText={this.state.inputText} onUserInput={this._handleUserInput}/>
                <h1>Hello {this.state.inputText}</h1>
            </div>
        );
    }

    _handleUserInput(text) {
        this.setState({inputText: text})
    }
}

export default HelloBox