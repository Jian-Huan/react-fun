import React from 'react'
import TextInput from 'components/TextInput'

class TalkBox extends React.Component {
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
                <span>Let's talk! </span>
                <TextInput inputText={this.state.inputText} onUserInput={this._handleUserInput}/>
                <h1>I would like to say: {this.state.inputText}</h1>
            </div>
        );
    }

    _handleUserInput(text) {
        this.setState({inputText: text})
    }
}

export default TalkBox