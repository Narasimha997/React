import React from 'react'
class Details extends React.Component{
    carName="Supra";
    model="MKIV";
    image="https://blog.dupontregistry.com/wp-content/uploads/2019/05/1998001_1995_Supra_SE-1500x969-1-750x485.jpg";
    render(){
        return <div>
            <hr/>
            <h1>CarName:{this.carName}</h1>
            <h3>Model:{this.model}</h3>
            <img src={this.image} alt=""/>
        </div>
    }
}
export default Details