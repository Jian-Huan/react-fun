jest.dontMock('../TextInput');

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

const TextInput = require('../TextInput');

//inputText={this.state.inputText} onUserInput={this._handleUserInput}

describe('TextInput', () => {
    it ('check default value', () => {
        var testInput = TestUtils.renderIntoDocument(<TextInput inputText="default"/>);
        var testInputNode = ReactDOM.findDOMNode(testInput);
        expect(testInputNode.text).toEqual('default');
    });
});