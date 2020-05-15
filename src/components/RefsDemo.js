import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
         // this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = e => {
            this.CbRef = e
        }

        
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        // console.log(this.cbRef)
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = ()=>{
        // alert(this.inputRef.current.value)
        alert(this.setCbRef.value)
    }

    
    render() {
        return (
            <div>
                {/* <input type="text" ref={this.inputRef}/> */}
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
