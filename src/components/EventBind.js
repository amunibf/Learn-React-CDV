import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    
/*     clickHandler(){
        this.setState({
            message : 'Good Bye!'
        })
        console.log(this)
    } */

    clickHandler = () => this.setState({
        message : 'Good Bye!'
    })
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>Event Bind</button>*/}
                {/*<button onClick={()=>this.clickHandler()}>Event Bind</button>*/}
                <button onClick={this.clickHandler}>Event Bind</button>
            </div>
        )
    }
}

export default EventBind
