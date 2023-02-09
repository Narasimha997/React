import React, { Component } from "react";
class Clock extends Component{
    state={
        ct:new Date().toLocaleTimeString()
    }
   updatae(){
    this.setState({ct:new Date().toLocaleTimeString()})
   }
   render(){
   return(
    <div>
    <h1>Digital CLock</h1>
    <h3>Time:{this.state.ct}</h3>
    <button onCLick={()=>{this.updatae()}}>Refresh</button>
</div>
   )
   }
}
export default Clock