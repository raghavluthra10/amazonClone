import React, { useState }  from 'react';
import './SelectPayment.css';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';


const SelectPayment = () => {

    const date = Date.now();

    const [ nameOnCard, setNameOnCard ] = useState('');
    const [ cardNumber, setCardNumber ] = useState('');
    const [ cardMonth, setCardMonth ] = useState('');
    const [ cardYear, setCardYear ] = useState('');
    const [ cvv, setCvv ] = useState('');
    const [ cardTorF, setCardTorF ] = useState(false);
    const [ newObj, setNewObj ] = useState(null);

    const history = useHistory();

    const [ { cardDetails, card  }, dispatch ] = useStateValue();

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
                    chose: false,
                }
            });
        }
    }

    const selectCard = (e) => {
     
        // for (let i=0; i<cardDetails.length; i++) {
        //     if(e === cardDetails[i].cardId) {
        //         dispatch({
        //             type: 'ADD_NEW_CARD', 
        //             card: {
        //                 ...cardDetails,
        //                 chose: true,
        //             }
        //         });
        //     } else {
        //         dispatch({
        //             type: 'ADD_NEW_CARD', 
        //             card: {
        //                 ...cardDetails,
        //                 chose: false,
        //             }
        //         });
        //     }
        // }

        

        for (let i=0; i<cardDetails.length; i++) {
            if(e === cardDetails[i].cardId) {
                console.log(cardDetails[i].cardId)
                dispatch({
                    type: 'SELECT_CARD', 
                    yes: {
                        cardId: cardDetails[i].cardId,
                        nameOnCard: cardDetails[i].nameOnCard,
                        cardNumber: cardDetails[i].cardNumber,
                        cvv: cardDetails[i].null,
                        cardMonth: cardDetails[i].cardMonth,
                        cardYear: cardDetails[i].cardYear,
                        chose: true,
                    }
                });
            } 
        }

    }

    const deleteCard = (id) => {
        dispatch({
            type: 'REMOVE_CARD',
            id: id,
        })
    }

    const proceedForPayment = (e) => {
        e.preventDefault();
        if(card.nameOnCard==='' || card.cardNumber==='' || card.cardYear==='' || card.cardMonth==='' || card.cvv ==='') {
            alert('Please Select a card')
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
                            <CheckCircleIcon />
                        </span>

                        <div>
                            <span>
                                Card number
                            </span>

                            <span>
                                Name on card
                            </span>

                            <span>
                                Expires on
                            </span>
                        </div>
                        

                        <span>
                            <DeleteIcon />
                        </span>
                    </div>
                
                  
                    {cardDetails.map((card) => (
                        <div  key={card.cardId} className='selectPayment__cardsOptionList'>
                            <FormControlLabel
                                onClick={() => selectCard(card.cardId)}
                                control={<Checkbox icon={<RadioButtonUncheckedIcon />}  checkedIcon={ <CheckCircleIcon />}  name="checked" />}
                                id={card.cardId}
                                />

                            <div>
                                <span>
                                    {card.cardNumber}
                                </span>

                                <span>
                                    {card.nameOnCard} 
                                </span>

                                <span>
                                    {card.cardMonth}  {card.cardYear}
                                </span>
                            </div>
                            
                            <DeleteIcon 
                            className='selectPayment__deleteIcon'
                            onClick={() => deleteCard(card.cardId)}
                            />
                        </div>
                    ))}
                        
                 
                
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

                        <div className='selectPayment__cvv'>
                            <label> Cvv   </label>
                            <input type='password' placeholder='ex: 123' value={cvv} onChange={e => setCvv(e.target.value)} />
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
//card.chose && `checkedIcon=${<CheckCircleIcon />} `