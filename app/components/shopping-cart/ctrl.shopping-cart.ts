export class ShoppingCartController {

  private shoppingBag:any;

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
    })
  }

}