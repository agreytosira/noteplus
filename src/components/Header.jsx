import React from 'react'
import SearchBar from './SearchBar'
import { generateSlug } from '../utils/format'

function Header({ searchHandler }) {
  return (
    <header className='header'>
      <div className='container header__container'>
        <h1 className='header__brand'>
          Note<span>Plus</span>
        </h1>
        <SearchBar searchHandler={searchHandler} />
      </div>
    </header>
  )
}

export default Header
