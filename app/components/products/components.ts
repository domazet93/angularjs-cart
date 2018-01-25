import { ProductsController } from "./ctrl.products";
import { ItemController } from "./ctrl.item";


const ProductsComponent = {
  bindings: {},
  template: require('./views/products.html'), 
  controller: ProductsController,
  controllerAs: "$ctrl"
}

const ItemComponent = {
  bindings: {
    itemDetails: "<"
  },
  template: require('./views/item.html'), 
  controller: ItemController,
  controllerAs: "$ctrl"
}

export { ProductsComponent, ItemComponent }