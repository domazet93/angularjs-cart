import { Item } from "./item";
const uuidv4 = require('uuid/v4');


export const Products: Item[] = [
  { 
    id: uuidv4(), 
    name: "Sofa", 
    url: "../../resources/sofa.png",
    details: "Lorem ipsum", 
    price: 120
  },
  { 
    id: uuidv4(), 
    name: "Cake", 
    url: "../../resources/cake.jpg",
    details:"Lorem ipsum",
    price: 40 
  },
  { 
    id: uuidv4(), 
    name: "Toys", 
    url: "../../resources/toys.jpg",
    details: "Lorem ipsum", 
    price: 120
  }
];