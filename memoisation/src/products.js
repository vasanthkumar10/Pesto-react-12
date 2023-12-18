const products = [1, 2, 3, 4, 5, 6].map((id) => ({
  id,
  name: `product-${id}`,
}));

export const productData = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 1000);
  });
