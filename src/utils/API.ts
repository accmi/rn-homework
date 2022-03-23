import {API_PRODUCT, API_PRODUCTS, API_AUTH} from '../config/constants';

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

export interface AuthResponse {
  token: string;
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

export const signIn = (
  email: string,
  password: string,
): Promise<AuthResponse | Error> => {
  const data = {
    grant_type: 'password',
    username: email,
    password: password,
  };

  return fetch(API_AUTH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(response => {
      const randomNumber = Math.random();

      if (randomNumber > 0.4) {
        throw new Error(response.error_description);
      }

      return {token: 'aslkjdfhalksjhdflkjahsdfkljhlkj'};
    });
};
