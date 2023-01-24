import React from "react";
function CompB(props){
    return(
        <div>
            <pre>{JSON.stringify(props)}</pre>
            <h1>Name{props.Name}</h1>
            <h1>Role{props.Role}</h1>
            <h1>Mobile{props.Mobile}</h1>
        </div>
    )
}
export default CompB