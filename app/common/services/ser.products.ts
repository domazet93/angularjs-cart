import { Products } from './mock-products';

export class ProductService {

  constructor() { }

  getProducts = () => {
    return Products;
  }
}