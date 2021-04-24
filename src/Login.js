import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

const Login = () => {

    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const login = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to homepage
                history.push('/');
            }).catch(e => alert(e.message))

    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //created a user and logged in, redirect to the home page
                history.push('/');
            }).catch(e => alert(e.message))

    }
    return (
        <div className='login' >
            <Link to='/'>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                alt=''  
                className='login__logo'
                />
            </Link>

            <div className='login__container'>
                <h1> Sign In </h1>
                <form>
                    <h5> E-mail </h5>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='text' />
                    
                    <h5> Password </h5>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' />

                    <button type='submit' onClick={login} className='login__signInButton' > Sign In </button>
                </form>
                
                <p>
                    By signing-in you agree to Amazon's Conditions of use and sale. 
                    Please see out Privacy Notice, our Cookies Notice and our Interest-Based
                    ads Notice.
                </p>

                <button onClick={register} className='login__registerButton' > Create your Amazon account </button>
            </div>
        </div>
    )
}

export default Login
