import { useState } from 'react';
import { getProductsFakeStore } from '../helpers/getProductsFakeStore';

export const AgregarProducto = ({ productos, setProductos }) => {
  const [cantProducto, setCantProducto] = useState('');
  const [idProducto, setIdProducto] = useState('');
  
  const onFormSubmit = async (e) => {
    e.preventDefault();

    const data = await getProductsFakeStore(idProducto, cantProducto);
    console.log('Entro', data)
    
    setProductos([...productos, data])
  };

  return (
    <div className='agregarProducto'>
      <h3 className='titulo__agregarProducto'>
        Agrega los productos al carro del compra
      </h3>

      <form onSubmit={onFormSubmit}>
        <input
          type='number'
          placeholder='Cantidad'
          id='cantProducto'
          value={cantProducto}
          onChange={(e) => setCantProducto(e.target.value)}
        />
        <input
          type='number'
          placeholder='ID del Producto'
          id='idProducto'
          value={idProducto}
          onChange={(e) => setIdProducto(e.target.value)}
        />

        <button type='submit' onSubmit={onFormSubmit}>
          Agregar
        </button>
      </form>
    </div>
  );
};
