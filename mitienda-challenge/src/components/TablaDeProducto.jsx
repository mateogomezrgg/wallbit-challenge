export const TablaDeProducto = ({ productos }) => {
  console.log('productos en tabla de prod.', productos);
  return (
    <div style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h3>Carrito de compra</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Cant</th>
            <th>Nombre</th>
            <th>Precio U</th>
            <th>Precio T</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((producto, index) => (
              <tr key={index}>
                <td>{producto.cantidad}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precioUnitario}</td>
                <td>${producto.precioTotal}</td>
                <td>
                  <img
                    src={producto.imagen || 'https://via.placeholder.com/50'}
                    alt={producto.nombre}
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
