import { useState } from "react";


function Card({ id, image, name, price, info, updatedTour }) {

    const [readMore, setReadmore] = useState(false);
    let disc = readMore ? info : `${info.substring(0, 200)}....`;

    function handleReadmore() {
        setReadmore(!readMore);


    }

    return (
        <div className="card">
            <img src={image} className="img" alt="imge"></img>
            <div className="tour-details">
                <h2>{name}</h2>
                <h2>{price}</h2>
            </div>
            <p>{disc} <span onClick={handleReadmore}>{readMore ? `show less` : `read more`}</span></p>

            <button onClick={() => updatedTour(id)}>Not Intrested</button>

        </div>
    )
}

export default Card