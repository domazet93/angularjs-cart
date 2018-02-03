export class ShoppingCartController {

  public shoppingBag:any;

  constructor(private $scope:any) {
    "ngInject"   
  }

  /**
   * @method onInit
   * @description on component creation lifecycle hook
   * @memberof ShoppingCartController
   */
  $onInit = () => {       
    this.$scope.$watchCollection(() => {
      return this.shoppingBag;
    }, (newVal:any, oldVal:any) => {
      if(newVal !== oldVal) {
        console.log("New Item Added -->", newVal)
      }
    })   
  }
  
  /**
   * @method getTotal
   * @description calculate sum of item price
   * @memberof ShoppingCartController
   */
  getTotal = () => {
    let total:number = 0;
    this.shoppingBag.forEach((item:any) => {
      if(item.hasOwnProperty("$newPrice")) {
        total = total +(item.$newPrice * item.$quantity)
      } else {
        total = total + (item.price * item.$quantity)
      }
    });    
    return total;
  }

}