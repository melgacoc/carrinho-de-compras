require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('testa se fetchItem é uma função', () => {
    expect(typeof fetchItem('MLB1615760527')).toEqual('function');
  });
  it('testa se a função fetch é chamada', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('testa se a função retorna uma url com o argumento computador', () => {
    fetchItem('MLB1615760527')
    expect(fetch('MLB1615760527')).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('testa se a função retorna a estrutura de dados igual ao objeto computadorSearch', () => {
    expect(fetchItem('MLB1615760527')).toEqual(item);
  });
  it('testa se a função retorna erro quando não houver argumento', () => {
    expect(fetchItem(undefined)).toThrow('You must provide an url');
  });
});
