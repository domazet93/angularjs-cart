
import { ShoppingCartController } from "./ctrl.shopping-cart";

export const ShoppingCartComponent = {
  bindings: {
    shoppingBag: "<"
  },
  template: require('./views/shopping-cart.html'),
  controller: ShoppingCartController,
  controllerAs: "$ctrl"
}