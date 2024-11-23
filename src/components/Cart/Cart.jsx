import React from 'react';
import { useCart } from '../../context/CartContext';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const Cart = () => {
  const { increment, decrement, remove, TotalPrice, cart } = useCart();

  return (
   
    <div className="min-h-screen bg-gray-100 mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
      {cart.length !== 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
        {cart.map(item => (
          <div key={item.id} className="flex items-center mb-4 p-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg">
            <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4 hover:scale-105 transition-transform duration-200" />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() => decrement(item.id)}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <FaMinus />
                </button>
                <span className="bg-gray-100 px-4 py-1 text-center w-12">{item.quantity}</span>
                <button
                  onClick={() => increment(item.id)}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <button
              onClick={() => remove(item.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-2 transition-colors duration-200"
              aria-label="Remove item"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold">₹{TotalPrice().toFixed()}</span>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            onClick={() => alert('Proceeding to checkout...')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      ) : (

        <div className='min-h-screen bg-gray-100'>
              <p className='text-center mt-5 text-2xl font-semibold'>Your cart is empty.</p>
             </div>
      )
      
      }
      
    </div>



  );
};

export default Cart;