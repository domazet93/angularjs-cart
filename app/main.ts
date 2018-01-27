import { module } from "angular";
const angular = require('angular');
const scss = require("./styles/scss/style.scss");


import { ProductsController } from "./components/products/ctrl.products";
import { ShoppingCartController } from "./components/shopping-cart/ctrl.shopping-cart";
import { ItemController } from "./components/products/ctrl.item";

import { AppComponent } from "./comp.main";
import { ProductsComponent, ItemComponent } from "./components/products/components";
import { ShoppingCartComponent } from "./components/shopping-cart/components";

import { ProductService } from "./common/services/ser.products";

import { MapToArray } from "./common/filters/fltr.mapToArray";

angular.module("app", [])  
  .controller({
    "productsController": ProductsController,
    "itemController": ItemController,
    "shoppingCartController": ShoppingCartController
  })  
  .service("productsService", ProductService)
  .filter("mapToArray", MapToArray)
  .component({
    "app": AppComponent,
    "products": ProductsComponent,
    "item": ItemComponent,
    "shoppingCart": ShoppingCartComponent
  })