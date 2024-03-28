import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {userEvent} from '@testing-library/user-event';
import Product from '../components/Product'; // Import your Navbar component
import App from '../App';

let titleElement, costElement, descriptionElement;


beforeEach(() => {
    // Render the Product component wrapped in MemoryRouter
    render(
      
        <Product title="Slim Shady" cost="$100.00" description="The real one" amount={1} />
      
    );
  
    // Find elements containing the text of the title, cost, and description
    titleElement = screen.getByText('Slim Shady');
    costElement = screen.getByText('$100.00');
    descriptionElement = screen.getByText('The real one');
  });

test('renders Product to the screen', () => {
    expect(titleElement).toBeInTheDocument();
    expect(costElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument(); 
  });
