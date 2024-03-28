import { Link } from "react-router-dom";
import Product from "../components/Product";
import TotalCartDisplay from "../components/TotalCartDisplay";
import Navbar from "../components/Navbar";


const CartPage = ({ cart, addToCart, emptyCart, removeFromCart}) => {

    return(
        <>
        <Navbar cart={cart}/>
        <TotalCartDisplay cart={cart} emptyCart={emptyCart} removeFromCart={removeFromCart}/>        
        </>

    )

}

export default CartPage