import React from 'react'
class Message1 extends React.Component{
    msg="Incoming";
    render(){
        return <div>
            <hr/>
            <h3>Message:{this.msg}</h3>
        </div>
    }
}
export default Message1