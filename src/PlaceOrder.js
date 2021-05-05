import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './PlaceOrder.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const PlaceOrder = () => {

    const [ state, dispatch ] = useStateValue();
    const [ cvvVal, setCvvVal ] = useState(null);

    const history = useHistory();
  
        // cardId: null,
        // selected: null
        // cardType: null,
        // nameOnCard: null,
        // cardNumber: null,
        // cvv: null,
        // cardMonth: null,
        // cardYear: null,

        const enterCvv = e => {
            e.preventDefault();

            dispatch({
                type: 'ADD_NEW_CARD',
                card: {
                    ...state,
                    cvv: cvvVal
                }
            })
            console.log(state)
        }

        
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
            <div className='placeOrder__Container' >
                <div className='placeOrder__left'>
                    <h1> Review your order </h1>
                    
                    <div className='placeOrder__leftDetail'>
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
                            {/* put a filter condition before cardDetails to map over only those cards whose selected = true */}
                            <span> Your card number: </span>
                            <span> {state.cardDetails.cardNumber}  </span>

                            <form>
                                <input value={cvvVal} onChange={e => setCvvVal(e.target.value)}  type='password' placeholder='CVV' />
                                <input  type='submit' className='placeOrder__cvvBtn' onClick={enterCvv} value='Enter Cvv' />
                            </form>
                        </div>
                    </div>
                </div>


                <div className='placeOrder__right'>
                    <Subtotal  proceedToCheckout={proceedToCheckout} btnLabel='Place your order' />
                </div>
            </div>
            
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
    )
}

export default PlaceOrder
