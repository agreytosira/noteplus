import React from 'react';
import SearchBar from './SearchBar';

function Header() {
    return (
        <header className='header'>
            <div className='container header__container'>
                <h1 className='header__brand'>NotePlus</h1>
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;
