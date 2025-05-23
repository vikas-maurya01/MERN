import { useState } from 'react';
import './AddItem.css';

function AddItem() {

    const[newProdName, setProdName]=useState('')
    const[newprodDate, setProdDate]=useState('')

    function inputHandler(event){
        // console.log(event.target.value);
        setProdName(event.target.value);
    }
    
    function changeDate(event){
        setProdDate(event.target.value);

        // console.log(prodDate);
        // console.log(prodName);
    }

    function submitForm(event){
        event.preventDefault();
        
        let prodDetail={
            prodDate:newprodDate,
            prodName:newProdName
        };

        setProdDate("");
        setProdName("");
        console.log(prodDetail);
    }

    return (
        <form className='form'onSubmit={submitForm} >
            <div className='add-product-name'>
                <label id='name'>Name of Product</label>
                <input type="text" onChange={inputHandler} value={newProdName} id="name" placeholder="Name Of Product"></input>
            </div>
            <div className='product-date'>
                <label id='date'>Date of Product</label>
                <input type="date" onChange={changeDate} id="date" value={newprodDate} min='2020-01-01' max='2025-12-31' placeholder="date Of Product"></input>
            </div>
            <div >
                <button className='submit-btn' type='submit'>Add Item</button>

            </div>
        </form>
    )
}

export default AddItem;