import React from 'react'


// ToDo: convert code to es6
const HelloTextInput = React.createClass({
    handleChange: function() {
        this.props.onUserInput(this.refs.helloTextInput.value)
    },

    render() {
        return (
            <input
                type="text"
                value={this.props.inputText}
                ref="helloTextInput"
                onChange={this.handleChange}
            />
        )
    }
})

const HelloBox = React.createClass({
    getInitialState: function() {
        return {
            inputText: ''
        }
    },

    handleUserInput: function(text) {
        this.setState({inputText: text})
    },

    render() {
        return (
            <div className="container">
                <span>Write some text in textbox: </span>
                <HelloTextInput inputText={this.state.inputText} onUserInput={this.handleUserInput}/>
                <h1>Hello {this.state.inputText}</h1>
            </div>
        )
     }
 })

export default HelloBox