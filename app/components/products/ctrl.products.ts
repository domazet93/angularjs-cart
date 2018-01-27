import { ProductService } from "../../common/services/ser.products";

export class ProductsController {

  public items:any = [];
  public shoppingBag:any = new Map();

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
  
  /**
   * @method addToBasket
   * @description check for item in bag and increase quantity
   * @param item 
   * @memberof ProductsController
   */
  addToBasket = (item:any) => {
    let id = item.id;
    if(this.shoppingBag.has(id)) {
      let item = this.shoppingBag.get(id);
      item.$quantity = item.$quantity + 1;
    } else {
      item.$quantity = 1;
      this.shoppingBag.set(id, item);
    }
  }
  
}