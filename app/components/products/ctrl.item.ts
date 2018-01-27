export class ItemController {

  public itemDetails: any = {};
  private showDiscountMsg:boolean = false;  
  public addToBasket:(item:any) => any;
  public discount:number = .3;

  constructor(private $scope:any) {
    "ngInject"

    this.$scope.$watch(() => {
      return this.itemDetails.$quantity
    }, (newVal:number, oldVal:number) => {
      if(newVal >=5) {
        this.countDiscount(this.itemDetails);
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
    item.$discountPrice = Math.round((item.$quantity * item.price) * 0.3);
    this.showDiscountMsg = true;  
  }
}