import { Item } from "./item";
const uuidv4 = require('uuid/v4');


export const Products: Item[] = [
  { id: uuidv4(), name: "Sofa", details: "Lorem ipsum", price: "50€" },
  { id: uuidv4(), name: "Blanket", details:"Lorem ipsum", price: "10€" }
];