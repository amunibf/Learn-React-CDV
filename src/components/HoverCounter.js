import React, { Component } from 'react'
import withCounter from './withCounter'


class HoverCounter extends Component { 
    
    render() {
        const {name, count, incrementCount} = this.props
        return <h2 onMouseOver ={incrementCount}>{this.props.nama} Hovered {count} times</h2>
    }
}

export default withCounter(HoverCounter, 5)
