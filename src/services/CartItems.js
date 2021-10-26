const local = localStorage;

export function getCart() {

  if (local.getItem('cart') === null) {
    local.setItem('cart', JSON.stringify([]))
  }
  return JSON.parse(local.getItem('cart'));
}

export function addItemToCart(product) {
  const cart = getCart();
  const searchInCart = cart.find((element) => element[product.id] !== undefined);
  let newCart;
  if (searchInCart) {
    newCart = cart.map((element) => {
      if (element[product.id] !== undefined) {
        const { id } = product;
        const obj = {};
        obj[id] = product;
        obj.qnt = element.qnt + 1;
        return obj;
      }
      return element;
    });
  } else {
    const { id } = product;
    const obj = {};
    obj[id] = product;
    obj.qnt = 1;
    newCart = [...cart, obj];
  }
  local.setItem('cart', JSON.stringify(newCart));
}

export function removeItemToCart(product) {
  const cart = getCart();
  const searchInCart = cart.find((element) => element[product.id] !== undefined);
  let newCart;
  if (searchInCart) {
    newCart = cart.map((element) => {
      if (element[product.id] !== undefined) {
        const { id } = product;
        const obj = {};
        obj[id] = product;
        obj.qnt = element.qnt - 1;
        return obj;
      }
      return element;
    });
  }
  newCart = newCart.filter((element) => element.qnt > 0);
  local.setItem('cart', JSON.stringify(newCart));
}