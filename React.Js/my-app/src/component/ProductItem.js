import './ProductItem.css';
import React, {useState} from 'react';
import Date from './Date';

function ProductItem(props){

    const [name, nameChanger]=useState(props.name)


    
const clicked=()=>{
    nameChanger("sweety")
    console.log("clicked")
}
    return(
        <div className='prod-item'>
            <Date day={props.day} month={props.month} year={props.year}></Date>
            <p className='product-name'>{name}</p>
            <button onClick={clicked}>click me</button>
        </div>
    )
}
export default ProductItem