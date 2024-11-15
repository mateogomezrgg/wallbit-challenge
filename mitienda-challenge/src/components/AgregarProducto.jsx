import { useState } from 'react';

export const AgregarProducto = () => {
  const [cantProducto, setCantProducto] = useState('');
  const [idProducto, setIdProducto] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('cantidad de producto: ' + cantProducto);
    console.log('id del producto: ' + idProducto);
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
