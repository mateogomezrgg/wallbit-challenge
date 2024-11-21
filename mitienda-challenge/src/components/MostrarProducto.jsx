import { TablaDeProducto } from './TablaDeProducto';

export const MostrarProducto = ({ productos }) => {
  return (
    <div className='productosAgregados'>
      <TablaDeProducto productos={ productos } />
    </div>
  );
};
