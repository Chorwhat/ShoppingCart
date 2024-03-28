import ProductInput from "./ProductInput";

const TotalCartDisplay = ({cart, emptyCart, addToCart}) => {

    let totalInCart = cart.reduce((total, item) => total + item.amount, 0);
    
return (
    <>
    {totalInCart > 0 ? <><h1>Total Items In Cart: {totalInCart}</h1> <button onClick={emptyCart}>empty cart</button> </>: ""}
    <ul>
        {cart.map((item, index) => <li key={index}>{item.amount} x {item.title} = { parseFloat(item.amount * item.cost).toFixed(2)}
</li>)}
    </ul>
    <p>
    
    {totalInCart > 0 ? ("Total Cost: $" + cart.reduce(
      (total, item) => total + item.amount * item.cost,
      0
    ).toFixed(2))  : ""}
  </p>
    </>
)
}

export default TotalCartDisplay