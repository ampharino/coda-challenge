import data from "./mocks/products.json";

export const api = {
  getProducts() {
    return new Promise((resolve) => {
      const products = data.products.map((product) => {
        return {
          id: product.id,
          name: product.name,
          productTagLine: product.productTagline,
          shortDescription: product.shortDescription,
          logoLocation: product.logoLocation,
        };
      });
      resolve(products);
    });
  },
};