import React from 'react';
import { Link } from 'react-router-dom';
const CartWidget = () => {
    return (
        <>
            <Link to={`/Cart`} className='invert' href="http://localhost:3000/"><img className='shop-cart' src="../resources/icons/shopping-bag.png" alt="Shopping-Bag" /></Link>
        </>
    );
}

export default CartWidget;
