import {API_PRODUCT, API_PRODUCTS} from '../config/constants';

export interface ProductsResponseProduct {
  attributes: {
    name: string;
    description: string;
    available_on: Date;
    available: boolean;
    currency: string;
    display_price: string;
    in_stock: boolean;
    price: string;
    updated_at: Date;
  };
  id: string;
}

export interface ProductsResponseLinks {
  first: string;
  last: string;
  next: string;
  prev: string;
  self: string;
}

export interface ProductsResponseMeta {
  count: number;
  total_count: number;
  total_pages: number;
}

export interface ProductsResponse {
  products: ProductsResponseProduct[];
  links: ProductsResponseLinks;
  meta: ProductsResponseMeta;
}

export const getProducts = (): Promise<ProductsResponse> => {
  return fetch(API_PRODUCTS)
    .then(response => response.json())
    .then(response => ({
      ...response,
      products: response.data,
    }));
};

export const getProduct = (slug: string): Promise<ProductsResponseProduct> => {
  const preparedUrlSlug = encodeURIComponent(slug)
    .replace('%20', '-')
    .toLowerCase();

  return fetch(`${API_PRODUCT}${preparedUrlSlug}`)
    .then(response => response.json())
    .then(response => response.data);
};
