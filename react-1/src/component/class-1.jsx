import React from "react";
import ClassB from "./class-2";
class ClassA extends React.Component{
    product_name="MI"
    product_price=20000

    render(){
        return(
            <div>
                <h2>
                    Product Component
                </h2>
                <hr/>
                <ClassB name={this.product_name}
                price={this.product_price}/>
            </div>
        )
    }
}
export default ClassA