export const getProductsFakeStore = async (id, cant) => {
  try {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const { title, image, price } = await resp.json();

    // console.log(title, image, price, cant);
    return {
      nombre: title,
      imagen: image,
      precioUnitario: price,
      cantidad: cant,
      precioTotal: cant * price, // Calcula el precio total
    };
  } catch (error) {
    console.error('Error: El ID del producto ingresado es incorrecto!', error);
  }
};
