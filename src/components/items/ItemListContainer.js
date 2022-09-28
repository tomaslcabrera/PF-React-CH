import React, {useState} from 'react';
import ContadorCarrito from './ContadorCarrito';

const ItemListContainer = ({numero}) => {
    const[posicion] = useState([
        {
            id: 0,
            tipo: "Dunk SB",
            nombre: "Dunk Parra",
            precio: 110,
            stock: 10,
            imagen: "../resources/imagenes/zapa1.jpg"
        },
        {
            id: 1,
            tipo: "Dunk SB",
            nombre: "Straweberry Cough",
            precio: 120,
            stock: 15,
            imagen: "../resources/imagenes/zapa2.jpg"
        },
        {
            id: 2,
            tipo: "Dunk SB",
            nombre: "Cliver",
            precio: 110,
            stock: 6,
            imagen: "../resources/imagenes/zapa3.jpg"
        },
        {
            id: 3,
            tipo: "Dunk SB",
            nombre: "Carpet",
            precio: 120,
            stock: 8,
            imagen: "../resources/imagenes/zapa4.jpg"
        },
        {
            id: 4,
            tipo: "Dunk SB",
            nombre: "Habibi",
            precio: 110,
            stock: 6,
            imagen: "../resources/imagenes/zapa5.jpg"
        },
        {
            id: 5,
            tipo: "Dunk SB",
            nombre: "VX 1000",
            precio: 100,
            stock: 7,
            imagen: "../resources/imagenes/zapa6.jpg"
        },
        {
            id: 6,
            tipo: "Dunk SB",
            nombre: "Gulf 58",
            precio: 110,
            stock: 10,
            imagen: "../resources/imagenes/zapa7.jpg"
        },
        {
            id: 7,
            tipo: "Dunk SB",
            nombre: "Chicago",
            precio: 100,
            stock: 10,
            imagen: "../resources/imagenes/zapa8.jpg"
        },
        {
            id: 8,
            tipo: "Dunk SB",
            nombre: "Instant",
            precio: 115,
            stock: 6,
            imagen: "../resources/imagenes/zapa9.jpg"
        }
    ])

    const producto = posicion[parseInt(numero)]

    return (
        <div className='cart-container'>
            <div className='image-container'>
                <img className='image-producto' src={producto.imagen} alt="" />
            </div>
            <div className='cart-description-container'>
                <p className='titulo-producto'>Nombre: {producto.nombre}</p>
                <p className='titulo-producto'>Tipo: {producto.tipo}</p>
                <p className='titulo-producto'>Precio: ${producto.precio}</p>
                <p className='titulo-producto'>stock: {producto.stock} unidades</p>
            </div>
            <ContadorCarrito/>
        </div>
    );
}

export default ItemListContainer;

