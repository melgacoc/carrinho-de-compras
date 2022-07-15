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

// criando lista de produtos
const productList = async () => {
  const fetchFunction = (await fetchProducts('computador')).results;
  console.log(fetchFunction);
  const buildList = document.querySelector('.items');
  fetchFunction.forEach(({ id, title, thumbnail }) => {
    const objectProduct = { sku: id, name: title, image: thumbnail};
    buildList.appendChild(createProductItemElement(objectProduct));
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};



// funções para limpar o carrinho
const clearCart = () => {
  const myCart = document.querySelector('.cart__items');
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
