import React from 'react';
import CartWidget from './CartWidget';

const SearchBar = ({busqueda}) => {
    return (
        <>
          <form className='search-bar-container'>
            <CartWidget/>
            <input className='search' type="text" placeholder={busqueda}/>
            <button className='button titles' type='submit'>buscar</button>
            </form>  
        </>
    );
}

export default SearchBar;
