import ProductInput from "./ProductInput"
import React, { useState } from 'react';

const Product = ({title,image, cost, description, amount, cart, addToCart, removeFromCart}) => {

    const [productAmount, setProductAmount] = useState(amount);

    const handleAmountChange = (newAmount) => {
        setProductAmount(newAmount);
    };

    return(
        <div className="product-card" >
            <h2>{title}</h2>
            <img src={image}/>
            <h2>{cost}</h2>
            <h3>{description}</h3>
            <ProductInput amount={productAmount} cost={cost} onAmountChange={handleAmountChange} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} title={title}/>
            <h3>Price: {(productAmount*parseFloat(cost)).toFixed(2)}</h3>
        </div>
    )
}

export default Product