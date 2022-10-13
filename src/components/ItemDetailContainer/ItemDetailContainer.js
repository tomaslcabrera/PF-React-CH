import { useState, useEffect } from 'react'
import { getProductById } from "../../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            console.log(response)
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return  (
        <div>
            <ItemDetail key={product.id} img={product.img} name={product.name} category={product.category} price={product.price}/>
        </div>
    )
}

export default ItemDetailContainer