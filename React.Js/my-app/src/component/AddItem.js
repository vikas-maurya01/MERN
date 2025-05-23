import { useState } from 'react';
import './AddItem.css';

function AddItem() {

    const[prodName, setProdName]=useState('')
    const[prodDate, setProdDate]=useState('')

    function inputHandler(event){
        // console.log(event.target.value);
        setProdName(event.target.value);
    }
    
    function changeDate(event){
        setProdDate(event.target.value);

        console.log(prodDate);
        console.log(prodName);
    }
    return (
        <form className='form'>
            <div className='add-product-name'>
                <label id='name'>Name of Product</label>
                <input type="text" onChange={inputHandler} id="name" placeholder="Name Of Product"></input>
            </div>
            <div className='product-date'>
                <label id='date'>Date of Product</label>
                <input type="date" onChange={changeDate} id="date" min='2020-01-01' max='2025-12-31' placeholder="date Of Product"></input>
            </div>
            <div >
                <button className='submit-btn' type='submit'>Add Item</button>

            </div>
        </form>
    )
}

export default AddItem;