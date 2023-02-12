import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Event extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:"Hello"
        }
    }
    gmHandler=()=>{
        this.setState({
            msg:'hi'
        })
    }
    render(){
        return(
            <div>
            <h3>Event:{this.state.msg}</h3>
                <button onClick={this.gmHandler} className="btn btn-warning">HJ</button>
            </div>
        )
    }
}
export default Event