import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TotalCartDisplay from '../components/TotalCartDisplay';
import ProductInput from '../components/ProductInput';



describe('TotalCartDisplay Component',  () => {
  it('should display total items in cart and clear cart when "empty cart" button is clicked', async () => {
    let cart = [{ title: 'Test Product', amount: 2 }, {title: 'Other Product', amount: 3}]; // Mock cart data
    function emptyCart(){
        cart = []
      }
    render(
      <TotalCartDisplay cart={cart} emptyCart={emptyCart} />
    );

    // Assert that total items in cart are displayed correctly
    expect(screen.getByText(/Total Items In Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument(); // Assuming 2 items are in the cart

    // Simulate clicking on the "empty cart" button
     await userEvent.click(screen.getByRole('button', {
        name: /empty cart/i
      }));
      
      expect(cart).toEqual([])

      })
    ;

  // You can write more test cases to coveqr other scenarios
});
