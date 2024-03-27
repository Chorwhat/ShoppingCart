import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {userEvent} from '@testing-library/user-event';
import Navbar from '../components/Navbar'; // Import your Navbar component

test('renders navbar to the screen', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  test('clicking on "products" link changes the URL to www.site.com/products', async () => {
    // Render Navbar component within MemoryRouter
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  
    // Find the "products" link and simulate a click event
    const productsLink = screen.getByText('Products'); 
    userEvent.click(productsLink);
  
    // Assert that the URL changes to end with products
    await waitFor(() => {
        expect(window.location.pathname).toBe('/products');
      });
  });


describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});