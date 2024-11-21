import { useState } from 'react';
import { AgregarProducto } from './components/AgregarProducto';
import { CarritoDeCompra } from './components/CarritoDeCompra';

export const MiTiendaApp = () => {
  const [productos, setProductos] = useState([]);

  return (
    <>
      <h1 className='titulo__miTiendaApp'>Tienda - El topo</h1>
      <AgregarProducto productos={productos} setProductos={setProductos}/>
      <hr />
      <CarritoDeCompra productos={productos}/>
    </>
  );
};
