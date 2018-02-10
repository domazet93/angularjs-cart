import { ProductsController } from "./ctrl.products"
import { ProductService } from "../../common/services/ser.products";

export class ItemController {

  public itemDetails: any = {};
  public showDiscountMsg:boolean = false;  
  public discount:number = .3;

  //  Dependency Annotation to have ability to minify app 
  static $inject = ["$scope"];

  constructor(public $scope:any) {
    "ngInject"
  }
  
  /**
   * @method onInit
   * @memberof ItemController
   */
  $onInit = () => {
    this.$scope.$watch(() => {
      return this.itemDetails.$quantity
    }, (newVal:number, oldVal:number) => {
      if(newVal === 5) {
        this.countDiscount(this.itemDetails);
      } else if(newVal < 5) {
        this.removeDiscount(this.itemDetails)
      }
    });
  }

  /**
   * @method countDiscount
   * @description calculate discount and show discount message
   * @param item
   * @memberof ItemController
   */
  countDiscount = (item:any) => {
    //let's say discount is 30% off for all items
    item.$newPrice = Math.round(item.price - (item.price * this.discount));
    this.showDiscountMsg = true;  
  }

  /**
   * @method removeDiscount
   * @description remove discount from the price and hide message
   * @param item
   * @memberof ItemController
   */
  removeDiscount = (item:any) => {
    delete item.$newPrice;
    this.showDiscountMsg = false; 
  }
}