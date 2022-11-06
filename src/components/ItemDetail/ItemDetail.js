import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, price, stock }) => {
   
    const { addItem, isInCart, getProductQuantity } = useCart()//useContext(CartContext)

    const handleOnAdd = (quantity) => {

        const productToAdd = {
            id,
            name,
            price
        }

        addItem(productToAdd, quantity)
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <article className="CardItem">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                { stock !== 0 ? <Counter onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>}
                {
                        isInCart(id) && <Link to='/cart' style={{ backgroundColor: 'black', color:'white'}}>Finalizar compra</Link>
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail