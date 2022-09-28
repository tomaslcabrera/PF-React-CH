import React, {useState} from 'react';

const ContadorCarrito = () => {
const[cantidad, setCantidad] = useState(1);
function modificarCantidad (operacion) {
if (operacion === "+") {
setCantidad(cantidad + 1)
} else if (cantidad >= 2) {
setCantidad(cantidad -1)
}
}
return (
<>
    <div className='cart-form' action="">
        <button className='button-cantidad' onClick={()=> modificarCantidad("-")}>-</button>
        <input className='card-imput' type="number" min="1" value={cantidad}/>
        <button className='button-cantidad' onClick={()=> modificarCantidad("+")}>+</button>
        <button className='card-button' type='submit'>Agregar al Carrito</button>
    </div>
</>
);
}

export default ContadorCarrito;