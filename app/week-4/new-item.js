"use client";  

import React, { useState } from 'react';

const NewItem = () => {
    const [quantity, setQuantity] = useState(1);  

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);  
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);  
        }
    };

    return (
        <div>
            <h2>Quantity: {quantity}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default NewItem;