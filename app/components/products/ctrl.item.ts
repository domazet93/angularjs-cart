export class ItemController {

  public itemDetails: any = {};

  constructor() {
    "ngInject"
  }

  /**
   * @method onInit
   * @description on component creation lifecycle hook
   * @memberof ProductsController
   */
  $onInit = () => {
    console.log("item-->", this.itemDetails)
  }

}