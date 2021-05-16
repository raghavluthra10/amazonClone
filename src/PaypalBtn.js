import React from "react";
import ReactDOM from "react-dom";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router";
import { useState } from "react";
import {db} from './firebase';
import './PaypalBtn.css';
import { Height } from "@material-ui/icons";



const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PaypalBtn = () => {

    const [ state, dispatch ] = useStateValue();
    const totalAmount = getBasketTotal(state.basket);


    const history = useHistory();

    const createOrder = (data, actions) => {
        console.log('createOrder:', data, actions);
        return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount,
                },
              },
            ],
          });
        
    };

    const onApprove = async (data, actions) => {
        console.log('onApprove:', data, actions);
        return await actions.order.capture()
            .then(function (details) {
                console.log(details)

                db.collection('orders').add({
                    products: [...state.basket],
                    address: state.address,
                    amount: totalAmount
                })


                history.push('/orderCompleted')
            })
            .then(
                dispatch({
                    type: 'EMPTY_BASKET',
                    emptyIt: [],
                })
            )
            .catch(error => alert(error))
            
   
    };


    return(
        <div className='paypalBtn'>
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        </div>
    )
}

export default PaypalBtn;


