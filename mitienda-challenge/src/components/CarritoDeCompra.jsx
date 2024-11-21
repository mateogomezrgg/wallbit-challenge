import { useEffect } from 'react';
import { MostrarProducto } from './MostrarProducto';

export const CarritoDeCompra = ({ productos }) => {
  useEffect(() => {}, [productos])

  console.log(` Products: ${JSON.stringify(productos)}`)
  return (
    <div className='carritoDeCompra'>
      <h3 className='titulo__carritoDeCompra'>Carrito de Compra</h3>
      <hr />
      {productos.length ? (
        <MostrarProducto productos={productos}/>
      ) : (
        <p>
          No hay productos en el carro aún, prueba agregando arriba con su id y
          la cantidad que deseas ingresar.
        </p>
      )}
    </div>
  );
};
