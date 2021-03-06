import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

const Header = () => {

    const [{ basket, user }] = useStateValue();
    
    const [ toggle, setToggle ] = useState(true)

    const login = (e) => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className='header' >
            <Link to='/'>
                <img src='https://m.media-amazon.com/images/G/39/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_ae-main._CB441728605_.png' alt='' className='header__logo'  />
            </Link>
            
            

            
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
            

            <div className={toggle ? 'header__nav' : 'header__nav active'}>

                <Link to={!user && '/login'} className='header__link' >
                    <div onClick={login} className='header__option'>
                        <span className='header__optionLineOne' > Hello {user?.email} </span>
                        <span className='header__optionLineTwo'> {user ? 'Sign Out' : 'Sign In'} </span>
                    </div>
                </Link>

                
                <Link to='/' className='header__link' >
                    <div className='header__option'>
                        <span className='header__optionLineOne'> Returns </span>
                        <span className='header__optionLineTwo'> Orders </span>
                    </div>
                </Link>

                
                <Link to='/' className='header__link' >
                    <div className='header__option'>
                        <span className='header__optionLineOne'> Your </span>
                        <span className='header__optionLineTwo'> Prime </span>
                    </div>
                </Link>
                
            </div>
 
            <Link to='/checkout' className='header__link' >
                <div className='header__optionBasket' >
              
                    <ShoppingBasketIcon  />
                   
                    <span className='header__optionLineTwo  header__basketCount' > {basket?.length} </span>
                </div>
            </Link>

            <div className='header__toggle' onClick={() => setToggle(!toggle)} >
                {toggle ? <MenuIcon className='header__icon' /> : <ClearIcon  /> } 
            </div>    
            

        </div>
    )
}

export default Header
