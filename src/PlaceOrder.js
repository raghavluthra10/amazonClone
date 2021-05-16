import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import PaypalBtn from './PaypalBtn';
import './PlaceOrder.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import { getBasketTotal } from './reducer';

const PlaceOrder = () => {

    const [ state, dispatch ] = useStateValue();
    const totalAmount = getBasketTotal(state.basket);

    const history = useHistory();
  
        // cardId: null,
        // selected: null
        // cardType: null,
        // nameOnCard: null,
        // cardNumber: null,
        // cvv: null,
        // cardMonth: null,
        // cardYear: null,
        
        
    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const proceedToCheckout = () => {
        
        history.push('/orderCompleted');
    };

    return (
        <div className='placeOrder'>
            
                <div className='placeOrder__left'>
                    
                    <div className='placeOrder__leftAdrress'>
                        <span className='placeOrder__shippingAdd' > Your Shipping Address: </span>
                        <span> {state.address.addressLine1} </span>
                        <span> {state.address.addressLine2} </span>
                        <span> {state.address.city} </span>
                        <span> {state.address.state} </span>
                        <span> {state.address.country} </span>
                        <span> {state.address.phone} </span>
                    </div>

                    <div className='placeOrder__leftCardDetails'>
                        <span className='placeOrder__payWith'> $ {totalAmount} Pay with: </span>
                        <span> <PaypalBtn className='placeOrder__PaypalBtn' />  </span>
                    </div>
                    
                </div>

                <div className='placeOrder__productListContainer'>

                    <h1> Review your order </h1> 

                {state.basket.map((info) => (
                               

                    <div className='placeOrder__productList'>
                        
                        <img src={info.image} alt='' className='placeOrder__productImage'  />

                        <div className='placeOrder__info'>
                            <p className='placeOrder__title' > {info.title} </p>

                            <p className='placeOrder__price' > 
                                <small> $ </small>
                                <strong> {info.price} </strong>
                            </p>

                            <div className='placeOrder__rating'>
                                {Array(info.rating).fill().map((_, i) => (
                                    <p> ⭐ </p>
                                ))}
                            </div>
                            
                            <button className='placeOrder__remove' onClick={() => removeItem(info.id)} > Remove from basket </button>
                        </div>
                    </div>
                
               
                ))}
                </div>

        </div>
    )
}

export default PlaceOrder
