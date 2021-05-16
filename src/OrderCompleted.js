import React from 'react';
import { useHistory } from 'react-router';
import './OrderCompleted.css';
import { useStateValue } from './StateProvider';

const OrderCompleted = () => {

    const history = useHistory();

    const [ { basket, user }, dispatch ] = useStateValue();

    const backToHomePage = (e) => {
        e.preventDefault();

        history.push('/')
    };

    return (
        <div className='orderCompleted'>
            <h1> Thank you for shopping at Amazon </h1>

            <h3>
                Your order will be dispatched soon.
            </h3>

            <button className='orderCompleted__btn' onClick={backToHomePage}>
                Back to shopping
            </button>
        </div>
    )
}

export default OrderCompleted
