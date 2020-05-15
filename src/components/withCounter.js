import React, { Component } from 'react'

const withCounter = (WrappedComponent, incrementNumber)=>{
    class WithCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                name : 'Munib',
                count:0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count:prevState.count + incrementNumber}
            })
        }

        render() {
            return <WrappedComponent 
            name ={this.state.name}
            count={this.state.count} 
            incrementCount={this.incrementCount} 
            {...this.props}
            />
        }
    }
    return WithCounter
}

export default withCounter
