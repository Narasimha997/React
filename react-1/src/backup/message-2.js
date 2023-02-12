import React from "react";
class Messages extends React.Component{
    constructor(props){
        super(props)
        console.log("First");
        this.msg="New";
    }
    handHandler=()=>{
        console.log("work");
        this.msg="gm"
        console.log(this.msg);
        this.forceUpdate()
    }
    render(){
        console.log("second");
        return <div>
            <h1>Message Component</h1>
            <hr/>
            <h2>Message: {this.msg}</h2>
            <button onClick={this.handHandler}>Now</button>
        </div>

    }
}
export default Messages