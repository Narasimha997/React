import React, {useState} from "react";
function Clip(){
    const[fname,setFname]=useState('')
    return(
        <div>
            <h1>
                <form>
                    <label>
                        First Name:<input type="text" value={fname}/>
                    </label>
                </form>
            </h1>
        </div>
    )
}
export default Clip