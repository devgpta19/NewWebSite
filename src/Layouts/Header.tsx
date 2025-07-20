import React, { useState } from 'react';
import './Header.scss';

const Header: React.FC = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <header className='header'>
            <div className='header__container'>

                <div className='header__container__logo'>
                    <div className='header__container__logo__content'>
                        <div className='header__container__logo__content__logoicon'></div>
                        <span className='header__container__logo__content__logotext'>TradyLytics</span>
                    </div>
                </div>

                <nav className={`header__container__nav ${isMobile ? 'header__container__nav--mobile' : ''} `} >
                    <a href="#" className="nav-link">Product</a>
                    <a href="#" className="nav-link">Resources</a>
                    <a href="#" className="nav-link">Pricing</a>
                    <a href="#" className="nav-link">Customers</a>
                    <a href="#" className="nav-link">Blog</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>

                <div className='header__container__actions'>
                    <div className="header__container__actions__btns">
                        <a className="btn btn__ghost">Log in</a>
                        <a className="btn btn__primary">Sign up</a>
                    </div>

                    <button
                        className={`mobile-menu-btn ${isMobile ? 'active' : ''}`}
                        onClick={() => setIsMobile(!isMobile)}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header;
