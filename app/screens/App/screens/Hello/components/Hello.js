import React from 'react'
import HelloBox from './HelloBox'
import TalkBox from './TalkBox'
import GoodbyeBox from './GoodbyeBox'
import Counter from './Counter'

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
                    <Counter/>
                </div>
            </div>
        )
    }
}

export default Hello