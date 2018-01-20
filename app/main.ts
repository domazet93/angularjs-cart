import { module } from "angular";
const angular = require('angular');

import { ProductsController } from "./components/products/ctrl.products";
import { ShoppingCartComponent } from "./comp.main";

angular.module('app', [])
  .controller('productsController', ProductsController)
  .component("shoppingCart", ShoppingCartComponent)