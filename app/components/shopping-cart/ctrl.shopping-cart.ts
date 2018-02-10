export class ShoppingCartController {

  public shoppingBag:any;

  //  Dependency Annotation to have ability to minify app 
  static $inject = ["$scope",  "$rootScope"];
  constructor(private $scope:any, private $rootScope:any) {
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
   * @description calculate total sum of items in bag
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

  /**
   * @method emptyBag
   * @description remove all items from shoppingBag, broadcast event to parent ctrl
   * @memberof ShoppingCartController
   */ 
  emptyBag = () =>{
    this.shoppingBag = [];
    this.$rootScope.$broadcast("emptyBag", this.shoppingBag)
  }

}