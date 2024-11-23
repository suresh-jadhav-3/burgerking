import React, { createContext, useState, useContext, useEffect } from 'react';
import {toast} from 'react-toastify'



export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
        const [cart, setCart] = useState(() => {
          const savedCart = localStorage.getItem("cart");
          return savedCart ? JSON.parse(savedCart) : [];
        });


        useEffect(() => {
            localStorage.setItem("cart", JSON.stringify(cart));
          }, [cart]);

    const AddToCart = (product) => {
       
        
        setCart((prevCart) => {
            const existingProduct = prevCart.find((items) => items.id === product.id)

            if(existingProduct) {
                toast.error("Already added this product", {
                    autoClose: 1500
                 });
                return prevCart.map((cartItems) => (
                    cartItems.id === product.id ? {...cartItems, quantity: cartItems.quantity+1} : cartItems
                ))
            }
            else{
                toast.success("Product added to cart!",{
                    autoClose: 1500
                 });
                return [...prevCart, {...product, quantity:1}]
            }
        })
        
    }


  


    const increment = (id) => {
        setCart((prevCart) => prevCart.map((items) => items.id === id ? {...items, quantity: items.quantity + 1} : items
    
    ))
    }

    const decrement = (id) => {
        setCart((prevCart) => 
            prevCart.map((items) => items.id === id && items.quantity > 1 ? {...items, quantity: items.quantity - 1} : items
    
    ))
    }

    const remove = (id) => {
        setCart((prevCart) => prevCart.filter((items) => items.id !== id))
    }

    const TotalPrice = () => {
        return cart.reduce((total, items) => total + items.price * items.quantity, 0)
    }




    return (
        <CartContext.Provider value=
        {{AddToCart, increment, decrement, remove, TotalPrice, cart, setCart}}>
            {children}
        </CartContext.Provider>
    )


}



export const useCart = () => useContext(CartContext);
