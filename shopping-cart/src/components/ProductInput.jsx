import React, { useState, useEffect} from 'react';
import classes from './ProductInput.module.css'; // Import CSS module

const ProductInput = ({ amount, cost, onAmountChange, addToCart, title, cart, removeFromCart }) => {
   
    const isInCart = cart.some(item => item.title === title);
  

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


     function handleAddToCart() {
         addToCart({ title: title, amount: amount, cost: cost, });
        
    }

    function handleRemoveFromCart(){
        removeFromCart({ title: title, amount: amount, cost: cost, })
    }

    

    return (
        <>
        <div className={classes.number}>
            <button className={classes.minus} onClick={subtractFromValue}>-</button>
            <input role="spinbutton" type="number" value={amount} onChange={e => handleChange(e)} />
            <button className={classes.plus} onClick={addToValue}>+</button>
        </div>
        {amount > 0 ? <button type="button" onClick={handleAddToCart}>Add to Cart</button> : ""}
        {isInCart? <button type="button" onClick={handleRemoveFromCart}>Remove {title} from Cart</button> : ""}
        </>
    );
};

export default ProductInput;
