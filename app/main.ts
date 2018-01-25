import { module } from "angular";
const angular = require('angular');
const scss = require("./styles/scss/style.scss");


import { ProductsController } from "./components/products/ctrl.products";
import { ItemController } from "./components/products/ctrl.item";

import { AppComponent } from "./comp.main";
import { ProductsComponent, ItemComponent } from "./components/products/components";
import { ShoppingCartComponent } from "./components/shopping-cart/components";

import { ProductService } from "./common/services/ser.products";


angular.module("app", [])  
  .controller({
    "productsController": ProductsController,
    "itemController": ItemController
  })  
  .service("productsService", ProductService)
  .component({
    "app": AppComponent,
    "products": ProductsComponent,
    "item": ItemComponent,
    "shoppingCart": ShoppingCartComponent
  })