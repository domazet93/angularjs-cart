import { Item } from "./item";
const uuidv4 = require('uuid/v4');


export const Products: Item[] = [
  { 
    id: uuidv4(), 
    name: "Sofa", 
    url: require("../../resources/sofa.png"),
    details: "Lorem ipsum", 
    price: 120
  },
  { 
    id: uuidv4(), 
    name: "Cake", 
    url: require("../../resources/cake.png"),
    details:"Lorem ipsum",
    price: 40 
  },
  { 
    id: uuidv4(), 
    name: "Toys", 
    url: require("../../resources/toys.png"),
    details: "Lorem ipsum", 
    price: 120
  }
];