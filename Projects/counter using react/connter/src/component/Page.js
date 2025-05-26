import "./page.css"
import React ,{ useState } from "react";

function Page(){
    let[count, incri]=useState();
    count=0
    incriment()
        count++;
    
    return(
        <div>
            <h1>Counter App</h1>
            <button onClick={incriment}>+</button>
            <span>{count}</span>
            <button>-</button>
        </div>
    )
}
export default Page;