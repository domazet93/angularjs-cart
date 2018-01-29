export class ShoppingCartController {

  public shoppingBag:any;
  public isEmptyBag:boolean;

  constructor(private $scope:any) {
    "ngInject"
  }

  /**
   * @method onInit
   * @description on component creation lifecycle hook
   * @memberof ShoppingCartController
   */
  $onInit = () => {
    this.$scope.$watch(() => {
      return this.shoppingBag
    }, (newVal:any, oldVal:any) => {
      console.log("Shopping bag updated-->", newVal)
      console.log(this.shoppingBag.size)
    })
  }

}