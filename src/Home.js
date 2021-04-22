import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <img 
            alt='' 
            src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Saina/launch/1500x600_Hero-Tall_P._CB655199226_.jpg'  
            className='home__image'
            />

            {/* product id, title, price, rating, image */}

            {/* Product */}
            <div className='home__row'>
                <Product 
                id='12345'
                title='The Lean Startup'
                price={11.96}
                rating={3}
                image='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/Smartivity/smartivity_1x._SY304_CB655110700_.jpg'
                />

                <Product 
                id='123425'
                title='The Lean Startup'
                price={11.96}
                rating={3}
                image='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/Smartivity/smartivity_1x._SY304_CB655110700_.jpg'
                />
            </div>


            <div className='home__row'>
                <Product 
                id='123345'
                title='The Lean Startup'
                price={11.96}
                rating={3}
                image='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/Smartivity/smartivity_1x._SY304_CB655110700_.jpg'
                />

                <Product 
                id='132345'
                title='The Lean Startup'
                price={11.96}
                rating={3}
                image='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/Smartivity/smartivity_1x._SY304_CB655110700_.jpg'
                />

                <Product 
                id='124345'
                title='The Lean Startup'
                price={11.96}
                rating={3}
                image='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/Smartivity/smartivity_1x._SY304_CB655110700_.jpg'
                />
            </div>


            <div className='home__row'>
                <Product 
                id='162345'
                title='The Lean Startup'
                price={11.96}
                rating={3}
                image='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/Smartivity/smartivity_1x._SY304_CB655110700_.jpg'
                />

                
            </div>
            
        </div>
    )
}

export default Home
