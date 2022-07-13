const fetchProducts = async (product) => {
  // seu código aqui
  const base = 'https://api.mercadolibre.com/sites/MLB/search?q='
  const url = `${base}${product}`;

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

fetchProducts(computador);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
