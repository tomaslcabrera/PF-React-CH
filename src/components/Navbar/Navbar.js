import React from 'react';
import Categories from '../Categories/Categories';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
return (
<>
    <nav className='navbar'>
        <div className='logo-container'>
            <a className='navbar-logo titles' href='http://localhost:3000/'>Kaizoku</a>
        </div>
        <Categories/>
        <CartWidget/>
    </nav>

</>
);
}

export default Navbar;