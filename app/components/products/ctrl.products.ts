import { ProductService } from "../../common/services/ser.products";

export class ProductsController {

  public items:any = [];

  constructor(private productsService: ProductService ) {
    "ngInject"
  }

  /**
   * @method onInit
   * @description on component creation lifecycle hook
   * @memberof ProductsController
   */
  $onInit = () => {
    this.items = this.productsService.getProducts();
  }
  
}