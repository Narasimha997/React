import React from "react";
class ClassB extends React.Component{
    renedr(){
        return(
            <div>
                <h4>Cart Component</h4>
                <pre>{JSON.stringify(this.props)}</pre>
                <h4>Product Name:{this.props.product_name}</h4>
                <h4>Product Price:{this.props.product_price}</h4>
                {/* <h4>Product Name:{this.props.name}</h4> */}
            </div>
        )
    }
}
export default ClassB