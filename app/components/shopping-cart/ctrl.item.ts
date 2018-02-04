export class ItemController {

  public itemDetails: any = {};
  private showDiscountMsg:boolean = false;  
  public addToBasket:(item:any) => any;
  public discount:number = .3;

  //  Dependency Annotation to have ability to minify app 
  static $inject = ['$scope'];
  constructor(private $scope:any ) {
    "ngInject"

    this.$scope.$watch(() => {
      return this.itemDetails.$quantity
    }, (newVal:number, oldVal:number) => {
      if(newVal === 5) {
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
    item.$newPrice = Math.round(item.price - (item.price * this.discount));
    this.showDiscountMsg = true;  
  }
}