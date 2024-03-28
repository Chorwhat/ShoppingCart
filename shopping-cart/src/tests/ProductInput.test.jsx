import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductInput from '../components/ProductInput'; // Import your ProductInput component
import { expect } from 'vitest';
import Product from '../components/Product';

let inputElement, minusButton, plusButton, user;

beforeEach(() => {
    //has to render a product to test the productsInput, otherwise onHandleChange would need to be redefined
    render(<Product title="Slim" cost={"3:00"} description={"lil bio"} amount={1}/>)

    user = userEvent.setup();
    // Find input and buttons
    inputElement = screen.getByRole('spinbutton');
    minusButton = screen.getByRole('button', { name: '-' });
    plusButton = screen.getByRole('button', { name: '+' });
});

test('renders input and buttons', () => {
    expect(inputElement).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
});

test('increases input value when plus button is clicked', async  () => {
    // Click the plus button
    
    await user.click(plusButton);
  
    // Check if the input value has increased
    
    expect(inputElement).toHaveValue(2); // Assuming it increases by 1

});

test('decreases input value when minus button is clicked, to a minimum of 0', async () => {
   
    await user.click(minusButton);
  
   
    expect(inputElement).toHaveValue(0); 
    await user.click(minusButton);
    expect(inputElement).toHaveValue(0); 
    
    
});

test('allows a selection to be typed over', async () => {
    inputElement.select();
  
    
    await user.type(inputElement, '{Control>}a{\Control}{backspace}');
   

    await user.type(inputElement, '132');

    // Click the plus button
    await user.click(plusButton);

    // Check if the input value has increased to 124
    expect(inputElement).toHaveValue(133);
});