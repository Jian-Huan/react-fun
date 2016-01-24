import React from 'react'
import TextInput from 'components/TextInput'

class GoodbyeBox extends React.Component {
    constructor() {
        super();
        this._handleUserInput = this._handleUserInput.bind(this);
        this.state = {inputText: ''}
    }

    render() {
        return (
            <div>
                <span>At the end, </span>
                <TextInput inputText={this.state.inputText} onUserInput={this._handleUserInput}/>
                <h1>Goodbye {this.state.inputText}</h1>
            </div>
        );
    }

    _handleUserInput(text) {
        this.setState({inputText: text})
    }
}

export default GoodbyeBox