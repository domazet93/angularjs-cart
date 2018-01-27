export class ItemController {

  public itemDetails: any = {};
  public addToBasket:(item:any) => any;

  constructor() {
    "ngInject"
  }

  /**
   * @method onInit
   * @description on component creation lifecycle hook
   * @memberof ProductsController
   */
  $onInit = () => {

  }

}