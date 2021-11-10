import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {

    render() {
        //destructure the props
        const {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>
                     Clicked {count} times
                </button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5)