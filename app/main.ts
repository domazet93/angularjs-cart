import { module } from "angular";
const angular = require('angular');
const scss = require("./styles/scss/style.scss");


import { ProductsController } from "./components/products/ctrl.products";

import { AppComponent } from "./comp.main";
import { ProductsComponent } from "./components/products/components";
import { ShoppingCartComponent } from "./components/shopping-cart/components";

angular.module('app', [])  
  .controller('productsController', ProductsController)
  .component({
    "app": AppComponent,
    "products": ProductsComponent,
    "shoppingCart": ShoppingCartComponent 
  })