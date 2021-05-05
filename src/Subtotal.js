import React from 'react';
import './Subtotal.css';
import CurrenyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

const Subtotal = (props) => {

    const [ { basket } ] = useStateValue()
    // const history = useHistory();


    return (
        <div className='subtotal' >
            <CurrenyFormat  
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong> {`${value}`} </strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' />  This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button onClick={() => props.proceedToCheckout()} > {props.btnLabel} </button>
        </div>
    )
}

export default Subtotal
