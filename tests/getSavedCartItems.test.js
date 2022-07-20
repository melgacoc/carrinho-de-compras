const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('testa se ao executar a função com parametro a função é chamada', () => {
    getSavedCartItems(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  it('testa se ao executar a função com o argumento é chamado 2 parametros', () => {
    getSavedCartItems(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems');
  });
  it('testa se a função retorna erro quando não houver argumento', () => {
    expect(getSavedCartItems(undefined)).toThrow(Error);
  });
});
