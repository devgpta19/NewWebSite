import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='header__container'>

                <div className='header__logo'>
                    <div className='header__logo__content'>
                        {/* <img src={logo} alt="logo" /> */}
                        <div className='header__logoicon'></div>
                        <span className='header__logotext'>TradyLytics</span>
                    </div>
                </div>

                <nav className='header__nav'>
                    <a href="#" className="nav-link">Product</a>
                    <a href="#" className="nav-link">Resources</a>
                    <a href="#" className="nav-link">Pricing</a>
                    <a href="#" className="nav-link">Customers</a>
                    <a href="#" className="nav-link">Blog</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>

                <div className="header__actions">
                    <a className="btn btn__ghost">Log in</a>
                    <a className="btn btn__primary">Sign up</a>
                </div>

            </div>
        </header>
    )
}

export default Header;
