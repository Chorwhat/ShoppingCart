// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import ProductPage from './pages/ProductPage.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App /> 
//   },
//   {
//     path: "products",
//     element: <ProductPage />,
//   },
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )



import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppWithCart = () => {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
   
    const existingItemIndex = cart.findIndex(item => item.title === product.title);
  
    if (existingItemIndex === -1) {
      setCart([...cart, product]);
    } else {
     
      const updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, amount: item.amount + product.amount };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.title !== product.title);
    setCart(updatedCart);
};

  function emptyCart(){
    setCart([])
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cart={cart} emptyCart={emptyCart} removeFromCart={removeFromCart} />} />
        <Route path="products" element={<ProductPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}  emptyCart={emptyCart}/>} />
        <Route path="cart" element={<CartPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}  emptyCart={emptyCart}/>} />

      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithCart />
  </React.StrictMode>
);

