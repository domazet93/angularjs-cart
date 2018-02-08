import { ProductService } from "../../common/services/ser.products";

export class ProductsController {
  public items:any = [];
  public shoppingBag:any = [];

  //  Dependency Annotation to have ability to minify app 
  static $inject = ["productsService"];
  constructor(protected productsService?: ProductService) {
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
  addToBasket(item:any) {
    let id = item.id,
        index = this.shoppingBag.indexOf(item);
        

    if(index > -1) {
      this.shoppingBag[index].$quantity = this.shoppingBag[index].$quantity + 1;
    } else {
      item.$quantity = 1;
      this.shoppingBag.push(item);
    }
  }
  
  /**
   * @method removeFromBasket
   * @description check for item in bag and increase quantity
   * @param item 
   * @memberof ProductsController
   */
  removeFromBasket(item:any) {
    if(item.hasOwnProperty("$quantity") && !item.$quantity) {
      return;
    }
    let id = item.id,
    index = this.shoppingBag.indexOf(item);
    
    if(index > -1) {
      this.shoppingBag[index].$quantity = this.shoppingBag[index].$quantity - 1;
    } else {
      item.$quantity = 0;
      this.shoppingBag.splice(index, 1)
    }
  }
}