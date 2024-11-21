import { getProductsFakeStore } from '../helpers/getProductsFakeStore';
import { TablaDeProducto } from './TablaDeProducto';

export const MostrarProducto = async () => {
  const cantidad = 29;
  const iddd = 1;
  const productos = await getProductsFakeStore(iddd, cantidad);

  console.log('productos', productos);

  return (
    <div className='productosAgregados'>
      <TablaDeProducto productos={{ productos }} />
    </div>
  );
};
