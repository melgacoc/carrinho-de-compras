const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// adiciona produtos ao carrinho
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
const queryCartItems = document.querySelector('.cart__items');

const cartItemClickListener = async (event) => {
  // coloque seu código aqui
  event.target.remove();
};

// cria lista
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// pega o id do item
const buttonAddCartItem = async (event) => {
  const productId = getSkuFromProductItem(event.target.parentNode);
  const fetchProductId = await fetchItem(productId);
  console.log(fetchProductId);
  const buildingCartList = queryCartItems;
  // não se usa forEach, pois a função me retorna somente 1 item
  const { id, title, price } = fetchProductId;
  const objectCartProduct = { sku: id, name: title, salePrice: price };
   buildingCartList.appendChild(createCartItemElement(objectCartProduct));
};

const addCartItem = () => {
  const buttonAdd = document.querySelectorAll('.item__add');
  buttonAdd.forEach((button) => {
   button.addEventListener('click', buttonAddCartItem);
  });
};

// criando lista de produtos
const productList = async () => {
  const fetchFunction = (await fetchProducts('computador')).results;
  const buildList = document.querySelector('.items');
  fetchFunction.forEach(({ id, title, thumbnail }) => {
    const objectProduct = { sku: id, name: title, image: thumbnail };
    buildList.appendChild(createProductItemElement(objectProduct));
  });
  addCartItem();
};

// funções para limpar o carrinho
const clearCart = () => {
  const myCart = queryCartItems;
  myCart.innerHTML = '';
};

const clearButton = (event) => {
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', clearCart);
};

window.onload = () => {
  productList();
  clearButton();
 };
