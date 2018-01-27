import { module } from "angular";
const angular = require('angular');
const scss = require("./styles/scss/style.scss");

// Controllers
import { ProductsController } from "./components/products/ctrl.products";
import { ShoppingCartController } from "./components/shopping-cart/ctrl.shopping-cart";
import { ItemController } from "./components/products/ctrl.item";

// Components
import { AppComponent } from "./comp.main";
import { ProductsComponent, ItemComponent } from "./components/products/components";
import { ShoppingCartComponent } from "./components/shopping-cart/components";

// Services
import { ProductService } from "./common/services/ser.products";

// Filters
import { MapToArray } from "./common/filters/fltr.mapToArray";
import { Percentage } from "./common/filters/fltr.percentage";

angular.module("app", [])  
  .controller({
    "productsController": ProductsController,
    "itemController": ItemController,
    "shoppingCartController": ShoppingCartController
  })  
  .service("productsService", ProductService)
  .filter({
    "mapToArray": MapToArray,
    "percentage": Percentage
  })
  .component({
    "app": AppComponent,
    "products": ProductsComponent,
    "item": ItemComponent,
    "shoppingCart": ShoppingCartComponent
  })