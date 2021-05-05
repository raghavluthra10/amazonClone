import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useHistory } from 'react-router';

const Checkout = () => {

    const [{ basket }] = useStateValue();

    const history = useHistory();

    const proceedToCheckout = () => {
        history.push('/billinfInfo')
    }

    return (
        <div className='checkout'>            
            <div className='checkout__left' >
            <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''  />

                {basket?.length === 0 ? (
                    
                    <div className='' >
                        <h2> Your Shopping Basket is empty </h2>
                    </div>    
                ) : (
                    <div className='checkout__title' >
                        <h1> Your Shopping Basket </h1>

                        {basket.map((item) => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>

            {basket.length > 0 && (
                <div className='checkout__right' >
                    <Subtotal  proceedToCheckout={proceedToCheckout} btnLabel='Proceed to checkout' />
                </div>
                )}
            
        </div>


    )
}

export default Checkout
