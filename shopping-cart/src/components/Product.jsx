import ProductInput from "./ProductInput"
import React, { useState } from 'react';

const Product = ({title, cost, description, amount}) => {

    const [productAmount, setProductAmount] = useState(amount);

    const handleAmountChange = (newAmount) => {
        setProductAmount(newAmount);
    };

    return(
        <div >
            <h1>{title}</h1>
            <h2>{cost}</h2>
            <h3>{description}</h3>
            <ProductInput amount={productAmount} onAmountChange={handleAmountChange} />
            <h3>Price: {(productAmount*parseFloat(cost)).toFixed(2)}</h3>
        </div>
    )
}

export default Product