import { Product } from './types';
import { dummyProducts } from './dummyData';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getAllProducts = async (): Promise<Product[]> => {
  await delay(500);
  return dummyProducts;
};

export const getProductById = async (id: number): Promise<Product> => {
  await delay(300);
  const product = dummyProducts.find((p) => p.id === id);
  if (!product) throw new Error('Product not found');
  return product;
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  await delay(500);
  return dummyProducts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
};

export const getCategories = (): string[] => {
  return [...new Set(dummyProducts.map((p) => p.category))];
};
