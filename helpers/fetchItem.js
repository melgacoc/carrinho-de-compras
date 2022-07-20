const fetchItem = async (id) => {
  // seu código aqui
  const baseUrl = 'https://api.mercadolibre.com/items/';
  const urlId = `${baseUrl}${id}`;

  try {
    const response = await fetch(urlId);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
