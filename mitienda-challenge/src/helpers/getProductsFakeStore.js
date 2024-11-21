export const getProductsFakeStore = async (id, cant) => {
  try {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.error('Error: El ID del producto ingresado es incorrecto!', error);
  }
};
