import React, { Component } from "react";
class Cranck extends Component{
    constructor(props){
        super(props);
        this.state={
            data:"Mikey"
        }
    }
    getData(){
        setTimeout(()=>{
            console.log('data gain');
            this.setState({
                data:"hello"
            })
        },2000)
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        return(
            <div>
                {this.state.data}
            </div>
        )
    }
}
export default Cranck