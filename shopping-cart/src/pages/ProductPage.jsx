import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import Product from "../components/Product";
import TotalCartDisplay from "../components/TotalCartDisplay";
import Navbar from "../components/Navbar";

const ProductPage = ({ cart, addToCart, emptyCart, removeFromCart}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false)
        console.log(data);
        setProducts(data);
      });
  }, []);

// let itemsInfo = [
//     {title: 'item 1',
//     cost: '1.00',
//     description: 'The first'},
//     {title: 'item 2',
//     cost: '2.25',
//     description: 'The second'},
//     {title: 'item 3',
//     cost: '5.00',
//     description: 'The third'},
//     {title: 'item 4',
//     cost: '4.00',
//     description: 'The fourth'},
//     {title: 'item 5',
//     cost: '3.00',
//     description: 'The fifth'},
// ]

let itemsInfo = products

function convertObjectToProduct(obj, index) {
    if(Object.prototype.hasOwnProperty.call(obj, "title") && Object.prototype.hasOwnProperty.call(obj, "price") && Object.prototype.hasOwnProperty.call(obj, "description")){
        return <Product image={obj.image} key={index} title={obj.title} cost={obj.price} description={obj.description} amount={0} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
    }
    else{
        print("must be a missing key")
    }
}





  return (
    <>
     {isLoading ? "" : <Navbar cart={cart} />}
      <h1>{isLoading ? "Loading... please hold." : ""}</h1>
      
      <div className="product-page-container">
      {itemsInfo.map(convertObjectToProduct)}
      </div>
    </>
  );
};

export default ProductPage;