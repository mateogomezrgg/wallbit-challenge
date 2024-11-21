import { AgregarProducto } from './components/AgregarProducto';
import { CarritoDeCompra } from './components/CarritoDeCompra';

export const MiTiendaApp = () => {
  return (
    <>
      <h1 className='titulo__miTiendaApp'>Tienda - El topo</h1>
      <AgregarProducto />
      <hr />
      <CarritoDeCompra />
    </>
  );
};
