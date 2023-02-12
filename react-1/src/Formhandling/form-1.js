import React, { Component } from "react";
class Login extends Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler=(event)=>{
        console.log(this.state);
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <h1>Login form</h1>
                <form onSubmit={this.submitHandler}>
                    <label>Email ID</label>
                    <input type="text" onChange={this.emailHandler}/><br /><br />
                    <label>Password</label>
                    <input type="password" onChange={this.emailHandler}/><br /><br />
                    <input type="submit" value="login" />
                </form>
            </div>
        )
    }
}
export default Login