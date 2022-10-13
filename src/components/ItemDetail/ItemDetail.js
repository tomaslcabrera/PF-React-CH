import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({ id, name, img, category, price, stock }) => {
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

    return (
        <div className="cart-container">
                <article>
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="ItemImg"/>
                </picture>
                <section>
                    <p className="Info">
                        Categoria: {category}
                    </p>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                </section>           
                <footer className='ItemFooter'>
                    <Counter onAdd={handleOnAdd} stock={stock} />
                </footer>
            </article>
        </div>
    )
}

export default ItemDetail