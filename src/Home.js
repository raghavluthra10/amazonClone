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

            <div className='home__row'>
                <Product 
                id='12345'
                title='TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model'
                price={99}
                rating={4}
                image='https://m.media-amazon.com/images/I/714hn7q7WxL._AC_UL480_FMwebp_QL65_.jpg'
                />

                <Product 
                id='123425'
                title='TomCare Cube Storage 12-Cube Bookshelf Closet Organizer Storage Shelves Shelf Cubes Organizer Plastic Book Shelf Bookcase DIY Square Closet Cabinet Shelves for Bedroom Office Living Room, Black'
                price={11.96}
                rating={5}
                image='https://m.media-amazon.com/images/I/51f8uV3i+VL._AC_UL480_FMwebp_QL65_.jpg'
                />
            </div>


            <div className='home__row'>
                <Product 
                id='123345'
                title='Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black'
                price={82}
                rating={5}
                image='https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL480_FMwebp_QL65_.jpg'
                />

                <Product 
                id='132345'
                title='Warner Brothers The Lego Batman Movie: Special Edition (DVD)'
                price={8}
                rating={3}
                image='https://m.media-amazon.com/images/I/81zk0yMazeL._AC_UL480_FMwebp_QL65_.jpg'
                />

                <Product 
                id='124345'
                title='ZBRANDS // Microsoft Surface Book 2 Magnetic Privacy Anti-Glare Screen Protector '
                price={11.96}
                rating={5}
                image='https://m.media-amazon.com/images/I/61ooRKLfoXL._AC_UL480_FMwebp_QL65_.jpg'
                />
            </div>


            <div className='home__row'>
                <Product 
                id='162345'
                title='SOJOS Vintage Cateye Polarized Women Sunglasses Trendy Oversized Frame SJ2115'
                price={13.99}
                rating={5}
                image='https://m.media-amazon.com/images/I/6171AJc-sGL._AC_UL480_FMwebp_QL65_.jpg'
                />

                
            </div>
            
        </div>
    )
}

export default Home
