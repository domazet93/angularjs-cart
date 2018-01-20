import { module } from "angular";
const angular = require('angular');
const scss = require("./styles/scss/style.scss");


import { ProductsController } from "./components/products/ctrl.products";
import { ShoppingCartComponent } from "./comp.main";

angular.module('app', [])
  .controller('productsController', ProductsController)
  .component("shoppingCart", ShoppingCartComponent)