import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './BillingInfo.css';
import { useStateValue } from './StateProvider';

const CheckoutFinal = () => {

    const [ fullName, setFullName ] = useState('');
    const [ addressLine1, setAddressLine1 ] = useState('');
    const [ addressLine2, setAddressLine2 ] = useState('');
    const [ city, setCity ] = useState('');
    const [ stateName, setStateName ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ phone, setPhone ] = useState('');


    const [ { address }, dispatch ] = useStateValue();

    const history = useHistory();

    const submitAddress = (e) => {
        e.preventDefault();

        if(fullName==='' || addressLine1==='' || addressLine2==='' || city==='' || stateName==='' || country==='' || phone==='') {
            alert('Please fill in the Address details')
        } else {
            dispatch({
                type: 'ADD_SHIPPING_ADDRESS',
                shippingAddress: {
                    fullName: fullName,
                    addressLine1: addressLine1,
                    addressLine2: addressLine2,
                    city: city,
                    state: stateName,
                    country: country,
                    phone: phone
                }
            })

            history.push('/placeOrder')
        } 
    };

    return (
        <div className='billingInfo' >
           
            <img className='billingInfo__img' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />
      

            <h1 className='billingInfo__shippingHeading' > Enter your shipping address. </h1>

            <form className='billingInfo__addressDetails'>
                <label> Full name: </label>
                <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />

                <label> Address line 1: </label>
                <input type='text' value={addressLine1} onChange={e => setAddressLine1(e.target.value)} placeholder='Street address...'  />

                <label> Address line 2: </label>
                <input  type='text'  value={addressLine2} onChange={e => setAddressLine2(e.target.value)} placeholder='Appartment, suite, unit, building...'  />

                <label> City </label>
                <input type='text' value={city} onChange={e => setCity(e.target.value)} />

                <label> State/Province/Region </label>
                <input type='text' value={stateName}  onChange={e => setStateName(e.target.value)} />

                <label> Country </label>
                <input type='text' value={country}  onChange={e => setCountry(e.target.value)} />
                
                <label> Phone number </label>
                <input type='text' value={phone} onChange={e => setPhone(e.target.value)} />

                <input type='submit' value='Proceed for payment' onClick={submitAddress} className='billingInfo__submit' />
            </form>

            <div className='billingInfo__paymentMethod' >
                
            </div>
        </div>
    )
}

export default CheckoutFinal
