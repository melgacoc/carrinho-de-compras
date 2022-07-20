require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('testa se fetchItem é uma função', async () => {
    expect(typeof await fetchItem('MLB1615760527')).toEqual('function');
  });
  it('testa se a função fetch é chamada', async () => {
    fetchItem('MLB1615760527')
    expect(await fetchItem).toHaveBeenCalledTimes(1);
  });
  it('testa se a função retorna uma url com o argumento computador', async () => {
    fetchItem('MLB1615760527')
    expect(await fetchItem('MLB1615760527')).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('testa se a função retorna a estrutura de dados igual ao objeto computadorSearch', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('testa se a função retorna erro quando não houver argumento', async () => {
    expect(await fetchItem(undefined)).toThrow('You must provide an url');
  });
});
