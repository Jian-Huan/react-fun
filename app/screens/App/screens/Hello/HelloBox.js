import React from 'react'

// ToDo: convert code to es6
//Step 3 - Bind instance methods / callbacks to the instance
class HelloTextInput extends React.Component {
    constructor() {
        super();
        this._handleChange = this._handleChange.bind(this);
    }

    render() {
        return (
            <input
                type="text"
                value={this.props.inputText}
                ref="helloTextInput"
                onChange={this._handleChange}
            />
        );
    }

    _handleChange() {
        this.props.onUserInput(this.refs.helloTextInput.value);
    }
}

HelloTextInput.propTypes = {
    inputText: React.PropTypes.string,
    onUserInput: React.PropTypes.func
};

HelloTextInput.defaultProps = {
    inputText: 'default'
};

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