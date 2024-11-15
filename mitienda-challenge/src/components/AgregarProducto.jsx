export const AgregarProducto = () => {
  return (
    <div className='agregarProducto'>
      <h3 className='titulo__agregarProducto'>
        Agrega los productos al carro del compra
      </h3>

      <form>
        <input type='number' placeholder='Cantidad' id='cantProducto' />
        <input type='number' placeholder='ID del Producto' id='idProducto' />

        <button type='submit'>Agregar</button>
      </form>
    </div>
  );
};
