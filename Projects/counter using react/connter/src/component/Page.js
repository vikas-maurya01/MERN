import "./page.css"
import React, { useState } from "react";

function Page() {
    let [count, incri] = useState(0);
    function incriment() {
        count = incri(count + 1);
    }
    function decriment() {
        count = incri(count - 1);
    }
    return (
        <div className="box">
            <h1>Counter App</h1>
            <div>
                <button onClick={incriment} >+</button>
                <span>{count}</span>
                <button onClick={decriment}>-</button>
            </div>
        </div>
    )
}
export default Page;