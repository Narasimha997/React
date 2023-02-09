import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
class Bind extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:'hello'
        }
    }
    gmHandler=()=>{
        this.setState({msg:'good'})
    }
    gaHandler=()=>{
        this.setState({msg:'avg'})
    }
    gnHandler=()=>{
        this.setState({msg:'not'})
    }
    render(){
        return<div>
            <h1>Binding Component</h1>
            <h3>Bind:{this.state.msg}</h3>
            <button onClick={this.gmHandler} className="btn btn-primary">Gm</button>&nbsp;
            <button onClick={this.gaHandler} className="btn btn-success">Ga</button>&nbsp;
            <button onClick={this.gnHandler} className="btn btn-warning">Gn</button>
        </div>
    }
    
}
export default Bind