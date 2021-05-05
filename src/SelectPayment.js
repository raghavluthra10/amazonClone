import React, { useState }  from 'react';
import './SelectPayment.css';
import Select from '@material-ui/core/Select';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const SelectPayment = () => {

    const date = Date.now();

    const [ nameOnCard, setNameOnCard ] = useState('');
    const [ cardNumber, setCardNumber ] = useState('');
    const [ cardMonth, setCardMonth ] = useState('');
    const [ cardYear, setCardYear ] = useState('');
    const [ cardSelected, setCardSelected ] = useState(null);
    const [ cardTorF, setCardTorF ] = useState(false);
    const [ newObj, setNewObj ] = useState(null);

    const history = useHistory();

    const [ { cardDetails, cardSelectedForPayment  }, dispatch ] = useStateValue();

    const addCard = (e) => {
        e.preventDefault(); 

        if(nameOnCard==='' || cardNumber==='' || cardYear==='' || cardMonth==='') {
            alert('Please fill all of the card details')
        } else {
            dispatch({
                type: 'ADD_NEW_CARD', 
                card: {
                    cardId: date,
                    nameOnCard: nameOnCard,
                    cardNumber: cardNumber,
                    cvv: null,
                    cardMonth: cardMonth,
                    cardYear: cardYear,
                }
            });
        }
    }

    const proceedForPayment = (e) => {
        e.preventDefault();
        if(cardDetails.nameOnCard==='' || cardDetails.cardNumber==='' || cardDetails.cardYear==='' || cardDetails.cardMonth==='') {
            alert('Please fill in your card details before moving forward')
        } else {
            history.push('/placeOrder');
        }
    };


    return (
        <div className='selectPayment'>
            <div className='selectPayment__container'>
                <h1 className='selectPayment__heading' > Add a card for payment </h1>

                <div className='selectPayment__cardsOption'>
                    <div className='selectPayment__cardsOptionHeading' >
                        <span>
                            Your card number
                        </span>

                        <span>
                            Name on card
                        </span>

                        <span>
                            Expires on
                        </span>
                    </div>
                
                  
                   
                        <div  key={cardDetails.cardId} className='selectPayment__cardsOptionList'>
                            <span>
                                {cardDetails.cardNumber}
                            </span>

                            <span>
                                {cardDetails.nameOnCard} 
                            </span>

                            <span>
                                {cardDetails.cardMonth}  {cardDetails.cardYear}
                            </span>
                        </div>
                 
                
                </div>


                <form className='selectPayment__addCard'>
                    <div className='selectPayment__addCardContainer'>
                        <div className='selectPayment__addCardText' >
                            <label> Name on card </label>
                            <input type='text' value={nameOnCard} onChange={e => setNameOnCard(e.target.value)} />
                        </div>
                        
                        <div className='selectPayment__addCardNumber'>
                            <label> Card number    </label>
                            <input type='number' placeholder='9862-****-****-7362' value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                        </div>
                        
                        <div className='selectPayment__addCardExp'>
                            <label> Expiration date </label> 
                            <div className='selectPayment__addCardExp__input'>
                                <input placeholder='Month' type='number'  value={cardMonth}  onChange={e => setCardMonth(e.target.value)} />
                                <input placeholder='Year' type='number' value={cardYear} onChange={e => setCardYear(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    
                    <input onClick={addCard} className='selectPayment__addCardBtn' type='submit' value='Add your card' />
                </form>
            
            </div>

            <div className='selectPayment__continueDiv'>
                <span>
                    You can review this order before it's final.
                </span>

                <button onClick={proceedForPayment} className='selectPayment__continueBtn'>
                    Continue
                </button>
            </div>
        </div>
        
    )
}

export default SelectPayment
