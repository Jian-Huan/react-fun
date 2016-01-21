import React from 'react';

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

export default HelloTextInput