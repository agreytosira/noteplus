import React from 'react'
import SearchBar from './SearchBar'

function Header({ searchHandler }) {
  return (
    <header className='header'>
      <div className='container header__container'>
        <h1 className='header__brand'>NotePlus</h1>
        <SearchBar searchHandler={searchHandler} />
      </div>
    </header>
  )
}

export default Header
