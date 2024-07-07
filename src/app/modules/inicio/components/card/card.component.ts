import { Component } from '@angular/core';

import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Productos[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "Adidas rosa",
        precio: 5,
        imagen: "https://th.bing.com/th/id/OIP.O0qLGUPm87CcbGJxpGielAAAAA?rs=1&pid=ImgDetMain"
      },
      {
        id: "",
        nombre: "Adidas salmon",
        precio: 7,
        imagen: "https://http2.mlstatic.com/tenis-adidas-neo-mujer-envio-gratis-a-todo-el-pais-zy1-D_NQ_NP_897572-MCO27825870459_072018-F.jpg"
      },
      {
        id: "",
        nombre: "Adidas azul",
        precio: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_832104-MCO27825877844_072018-F.jpg"
      },
      {
        id:"",
        nombre:"remera adidas negra",
        precio: 12,
        imagen:"https://ferreira.vtexassets.com/arquivos/ids/362929/ad_cw0709.jpg?v=637448164257070000"
      },
      {
        id:"",
        nombre:"remera adidas blanca",
        precio: 15,
        imagen:"https://static.shiekh.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/8/d/8dca6a60cee56ce4d5b12ffd4650d058.jpg"
      },
      {
        id:"",
        nombre:"remera adidas logo azul",
        precio: 15,
        imagen:"https://essential.vtexassets.com/arquivos/ids/1123344-800-auto?v=638365908250370000&width=800&height=auto&aspect=true",
      },
    ]
  }

}
