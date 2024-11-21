import { useState } from 'react';
import { MostrarProducto } from './MostrarProducto';

export const CarritoDeCompra = () => {
  const [hayProductos, setHayProductos] = useState(true);

  return (
    <div className='carritoDeCompra'>
      <h3 className='titulo__carritoDeCompra'>Carrito de Compra</h3>
      <hr />
      {hayProductos ? (
        <MostrarProducto />
      ) : (
        <p>
          No hay productos en el carro aún, prueba agregando arriba con su id y
          la cantidad que deseas ingresar.
        </p>
      )}
    </div>
  );
};
