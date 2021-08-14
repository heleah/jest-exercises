// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  // TODO: implement
  const copy = Object.assign({}, item);
  copy.price = price;
  return copy;
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  // TODO: implement
  const copy = cart.slice();
  copy.push(item);
  return copy;
};

describe('setPrice()', () => {
  it('should set the price in the given item object, immutably.', () => {
    const item = {
      name: 'test',
      price: 30,
    };
    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
      name: 'test',
      price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).toEqual(copy);
  });
});

describe('addToCart()', () => {
  it('should add item to cart, immutably', () => {
    const originalCart = [];
    const item = {
      name: 'Violator',
      price: 30,
    };
    const copy = originalCart.slice();

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).toEqual(copy);
  });
});
