import React from 'react'

const HelloTextInput = React.createClass({
    render() {
        return (
            <input type="text" value={this.props.inputText}/>
        )
    }
})

const HelloBox = React.createClass({
    getInitialState() {
        return {
            inputText: ''
        }
    },

    render() {
        return (
            <div className="container">
                Write some text in textbox: <HelloTextInput inputText={this.state.inputText}/>
                <h1>Hello</h1>
            </div>
        )
     }
 })

export default HelloBox

/*
 <input type="text" ng-model="sometext" />
 <h1>Hello {{ sometext }}</h1>
 */