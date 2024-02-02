import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function Header({ searchHandler }) {
    return (
        <header className='header'>
            <div className='container header__container'>
                <h1 className='header__brand'>
                    <Link to='/'>
                        Note<span>Plus</span>
                    </Link>
                </h1>
                <SearchBar searchHandler={searchHandler} />
            </div>
        </header>
    );
}

export default Header;
