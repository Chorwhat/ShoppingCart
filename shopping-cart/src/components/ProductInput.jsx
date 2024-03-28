import React, { useState } from 'react';
import classes from './ProductInput.module.css'; // Import CSS module

const ProductInput = ({ amount, onAmountChange }) => {
   

    function addToValue() {
        onAmountChange(amount + 1); // Update value using state setter function
        
    }

    function subtractFromValue() {
        if(amount > 0){
        onAmountChange(amount - 1); // Update value using state setter function
        }
    }
    
    function handleChange(e) {
        const inputValue = parseInt(e.target.value);
        if (isNaN(inputValue)) {
            onAmountChange(0); 
        } else {
            onAmountChange(inputValue); 
        }
    }

    return (
        <div className={classes.number}>
            <button className={classes.minus} onClick={subtractFromValue}>-</button>
            <input role="spinbutton" type="number" value={amount} onChange={e => handleChange(e)} />
            <button className={classes.plus} onClick={addToValue}>+</button>
        </div>
    );
};

export default ProductInput;
