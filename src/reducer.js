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
    user: null,
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action)
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
                basket: newBasket }
        default:
            return state
    }
}

export default reducer;