import "@/style/style.css";
import { getNode, insertLast } from "kind-tiger";
import santa from "@/assets/santa.png";
import { btn } from "@/style/style.module.css";

const app = getNode("#app");

const template = /* html */ `
  <figure clas="container">
   <img style="width:30vw" src="${santa}">
   <figcaption>산타 모자를 쓴 호랑이</figcaption>
   <button type="button" class="${btn}">BUTTON</button> 
  </figure>
`;

insertLast(app, template);
