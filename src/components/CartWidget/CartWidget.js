import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { totalQuantity} = useContext(CartContext)  
    return (
        <>
            <Link to={`/Cart`} className='invert' href="http://localhost:3000/"><img className='shop-cart' src="../resources/icons/shopping-bag.png" alt="Shopping-Bag" />
            {totalQuantity}
            </Link>
            
        </>
    );
}

export default CartWidget;
