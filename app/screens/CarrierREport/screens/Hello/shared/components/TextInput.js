import React from 'react';

class TextInput extends React.Component {
    constructor() {
        super();
        this._handleChange = this._handleChange.bind(this);
    }

    render() {
        return (
            <input
                type="text"
                value={this.props.inputText}
                ref="textInput"
                onChange={this._handleChange}
            />
        );
    }

    _handleChange() {
        this.props.onUserInput(this.refs.textInput.value);
    }
}

TextInput.propTypes = {
    inputText: React.PropTypes.string,
    onUserInput: React.PropTypes.func
};

TextInput.defaultProps = {
    inputText: ''
};

export default TextInput