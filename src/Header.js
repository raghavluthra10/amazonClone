import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <div className='header' >
            {/* logo on the left */}
            <Link to='/'>
                <img src='https://m.media-amazon.com/images/G/39/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_ae-main._CB441728605_.png' alt='' className='header__logo'  />
            </Link>
            
            {/* search Box */}
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
            

            {/* 3 links */}
            <div className='header__nav'>
                {/* 1st Link */}
                <Link to='/login' className='header__link' >
                    <div className='header__option'>
                        <span className='header__optionLineOne' > Hello Raghav </span>
                        <span className='header__optionLineTwo'> Sign In </span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to='/' className='header__link' >
                    <div className='header__option'>
                        <span className='header__optionLineOne'> Returns </span>
                        <span className='header__optionLineTwo'> Orders </span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to='/' className='header__link' >
                    <div className='header__option'>
                        <span className='header__optionLineOne'> Your </span>
                        <span className='header__optionLineTwo'> Prime </span>
                    </div>
                </Link>
                
            </div>
            
            {/* basket icon with the number */}
            <Link to='/checkout' className='header__link' >
                <div className='header__optionBasket' >
                    {/* shopping basket icon */}
                    <ShoppingBasketIcon  />
                    {/* number of items in the basket */}
                    <span className='header__optionLineTwo  header__basketCount' > 0 </span>
                </div>
            </Link>

        </div>
    )
}

export default Header
