import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <div className="main-container">
            { products.map(prod => <Item key={prod.id} id={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price}/>)}            
        </div>
    )
}

export default ItemList