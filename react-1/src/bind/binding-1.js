import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
class Bind1 extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:'hello'
        }
    }
    updateHandler=(value)=>{
        this.setState({
            msg:value
        })
    }
    render(){
        return<div>
            <h1>Binding Component</h1>
            <h3>Bind:{this.state.msg}</h3>
            <button onClick={this.updateHandler.bind(this,"Good")} className="btn btn-primary">Gm</button>&nbsp;
            <button onClick={this.updateHandler.bind(this,"Avg")} className="btn btn-success">Ga</button>&nbsp;
            <button onClick={this.updateHandler.bind(this,"bad")} className="btn btn-warning">Gn</button>
        </div>
    }
    
}
export default Bind1