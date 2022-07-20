const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('testa se ao executar a função com parametro a função é chamada', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  it('testa se ao executar a função com o argumento é chamado 2 parametros', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>')
  });
  it('testa se a função retorna erro quando não houver argumento', () => {
    expect(saveCartItems(undefined)).toThrow(Error);
  });
});
