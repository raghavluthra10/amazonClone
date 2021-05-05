import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import BillingInfo from './BillingInfo';
import SelectPayment from './SelectPayment';
import PlaceOrder from './PlaceOrder.js';
import OrderCompleted from './OrderCompleted';


function App() {

  const [ { user }, dispatch ] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

    return () => {
      unsubscribe();
    }

  }, [])

  console.log(user)

  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path='/checkout' > 
            <Header  /> 
             <Checkout  />   
          </Route>
          <Route path='/selectPaymentOption' > 
            <Header  /> 
             <SelectPayment  />   
          </Route>
          <Route path='/orderCompleted' > 
            <Header  /> 
             <OrderCompleted  />   
          </Route>
          <Route path='/billinfInfo'>
            <Header  />
            <BillingInfo  />
          </Route>
          <Route path='/placeOrder'>
            <Header  />
            <PlaceOrder />
          </Route>
          <Route path='/login' >
              <Login  />  
          </Route>
          
          <Route path='/' > 
            <Header  /> 
            <Home  />  
          </Route>
        </Switch>
      </div>
    </Router>
   );
  }

export default App;


// https://images-eu.ssl-images-amazon.com/images/G/31/checkout/payselect/progressbar-payments._CB485947677_.gif
// https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/confirm-banner._CB485949149_.gif