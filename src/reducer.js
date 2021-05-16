export const initialState = {
    basket: [
        // {
        //         id:'124345',
        //         title:'The Lean Startup',
        //         price:11.96,
        //         rating:3,
        //         image:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/Smartivity/smartivity_1x._SY304_CB655110700_.jpg'
        // }
    ],
    order:[],
    user: null,
    address: {        
        //     fullName: null,
        //     addressLine1: null,
        //     addressLine2: null,
        //     city: null,
        //     state: null,
        //     country: null,
        //     phone: null
    },
    cardDetails: [
        // cardId: null,
        // nameOnCard: null,
        // cardNumber: null,
        // cvv: null,
        // cardMonth: null,
        // cardYear: null,
        // chose: null,
    ],
    card: {
        // cardId: null,
        // nameOnCard: null,
        // cardNumber: null,
        // cvv: null,
        // cardMonth: null,
        // cardYear: null,
        // chose: null,
    }
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    // console.log(action);
    console.log(state);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return { ...state,
            basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket
            let newBasket = [ ...state.basket ]

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id )

            if(index >= 0) {
                // remove the item in the basket
                newBasket.splice(index, 1)
            }
            return { ...state, 
                basket: newBasket };
        case 'ADD_SHIPPING_ADDRESS':
            //logic for adding address
            return {
                ...state,
                address: action.shippingAddress
            };
        case 'ADD_ORDER':
            return {
                ...state,
                order:[action.addOrder]
            }   
        case 'EMPTY_BASKET':
            // let emp = [...state.basket]

            // const fullEmpty = emp.filter((none) => none.price === -1)

            return{
                ...state,
                basket: action.emptyIt
            }
        default:
            return state
    }
}

export default reducer;