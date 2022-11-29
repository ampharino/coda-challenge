import type { Product, ProductDetail } from "@/types";
import data from "./mocks/products.json";

export const api = {
  getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      const products = data.products.map((product) => {
        return {
          id: product.id,
          name: product.name,
          logoLocation: product.logoLocation,
        };
      });
      resolve(products);
    });
  },
  getProductDetail(id: number): Promise<ProductDetail> {
    return new Promise((resolve, reject) => {
      const product = data.products.find((product) => product.id === id);
      console.log({ product });
      if (!product) {
        reject("Something went wrong");
        return;
      }
      resolve({
        id: product.id,
        name: product.name,
        logoLocation: product.logoLocation,
        longDescription: product.longDescription,
        shortDescription: product.shortDescription,
        productTagLine: product.productTagline,
      });
    });
  },
};
