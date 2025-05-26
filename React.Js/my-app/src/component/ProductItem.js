import './ProductItem.css';
import React, { useState } from 'react';
import ProdDate from './ProdDate';

function ProductItem(props) {

    const [name, nameChanger] = useState(props.name)

    
    const jsDate = new Date(props.pdate); 
    console.log(jsDate)
    const date = {
        day: jsDate.getDate(),
        month: jsDate.toLocaleString('default', { month: 'short' }),
        year: jsDate.getFullYear()
    }

    const clicked = () => {
        nameChanger("sweety")
        console.log("clicked")
    }
    return (
        <div className='prod-item'>
            <ProdDate day={date.day} month={date.month} year={date.year} />
            <p className='product-name'>{name}</p>
            <button onClick={clicked}>click me</button>
        </div>
    )
}
export default ProductItem