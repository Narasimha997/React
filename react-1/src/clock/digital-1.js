import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
class Clock1 extends Component{
    constructor(props){
        super(props)
        this.state={
            ct:new Date().toLocaleTimeString()
        }
    }
    getDate(){
        setInterval(()=>{
            this.setState({
                ct:new Date().toLocaleTimeString()
            })
        },1000)
    }
    componentDidMount(){
        this.getDate()
    }
    render(){
        return(
            <div>
            <div className="card">
            <div className="card-header">
            <h1>Digital CLock</h1>
            </div>
            <div className="card-body">
            <h3>Time:{this.state.ct}</h3>
            </div>
            </div>
    </div>
        )
    }
}
export default Clock1