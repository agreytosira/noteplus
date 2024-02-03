import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='container header__container'>
                <h1 className='header__brand'>
                    <Link to='/'>
                        Note<span>Plus</span>
                    </Link>
                </h1>
            </div>
        </header>
    );
}

export default Header;
