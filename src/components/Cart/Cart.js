import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import ItemCart from "../ItemCart/ItemCart"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            { cart.map(p => <ItemCart key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart