import './AddItem.css';

function AddItem() {
    return (
        <form className='form'>
            <div className='product-name'>
                <label id='name'>Name of Product</label>
                <input type="text" id="name" placeholder="Nmae Of Product"></input>
            </div>
            <div className='product-date'>
                <label id='date'>Date of Product</label>
                <input type="date" id="date" min='2020-01-01' max='2025-12-31' placeholder="date Of Product"></input>
            </div>
            <div className='submit-btn'>
                <button type='submit'>Add Item</button>

            </div>
        </form>
    )
}

export default AddItem;