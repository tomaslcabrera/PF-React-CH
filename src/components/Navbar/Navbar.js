import React from 'react';
import Categories from './Categories';
import SearchBar from './SearchBar';
import './Navbar.css';


const Navbar = () => {
return (
<>
    <nav className='navbar'>
        <div className='logo-container'>
            <a className='navbar-logo titles' href='http://localhost:3000/'>Kaizoku</a>
        </div>
        <Categories/>
        <SearchBar busqueda="Buscar Productos" />
    </nav>

</>
);
}

export default Navbar;