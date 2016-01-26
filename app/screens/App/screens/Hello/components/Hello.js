import React from 'react'
import HelloBox from './HelloBox'
import TalkBox from './TalkBox'
import GoodbyeBox from './GoodbyeBox'
import CounterWrap from './CounterWrap'

class Hello extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <HelloBox/>
                </div>
                <div className="row">
                    <TalkBox/>
                </div>
                <div className="row">
                    <GoodbyeBox/>
                </div>
                <div className="row">
                    <CounterWrap />
                </div>
            </div>
        )
    }
}

export default Hello