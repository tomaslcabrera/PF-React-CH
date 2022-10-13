import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <ul className='navbar-container'>
            <li><Link to={`/`} className='button titles'>Inicio</Link></li>
            <li><Link to={`/category/Nike`} className='button titles'>Nike</Link></li>
            <li><Link to={`/category/Adidas`} className='button titles'>Adidas</Link></li>
            <li><Link to={`/category/Jordan`} className='button titles'>Jordan</Link></li>
        </ul>
    );
}

export default Categories;
