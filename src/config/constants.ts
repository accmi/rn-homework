export const API_PRODUCTS =
  'https://demo.spreecommerce.org/api/v2/storefront/products';
export const API_PRODUCT =
  'https://demo.spreecommerce.org/api/v2/storefront/products/';

export enum Routes {
  Main = 'Main navigator',
  Drawer = 'Drawe navigator',

  Home = 'Home Screen',
  Product = 'Product Screen',

  CartNavigator = 'Cart Navigator',
  CartLoginFirst = 'Cart login first Screen',
  Cart = 'Cart Screen',

  // MODALS
  SelectColorErrorModal = 'Select color error modal',
  ProductAddedModal = 'Product added',
  LoginToContinueModal = 'Login to continue',

  Profile = 'My Profile',
}

export enum AsyncStorageKeys {
  UserToken = 'UserToken',
  CartItems = 'CartItems',
}
