require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('testa se fetchProducts é uma função', async () => {
    expect(typeof await fetchProducts('computador')).toEqual('function');
  });
  it('testa se a função fetch é chamada', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('testa se a função retorna uma url com o argumento computador', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('testa se a função retorna a estrutura de dados igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('testa se a função retorna erro quando não houver argumento', async () => {
    expect(await fetchProducts(undefined)).toThrow('You must provide an url');
  })
});
