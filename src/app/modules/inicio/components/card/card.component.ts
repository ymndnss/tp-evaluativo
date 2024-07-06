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
      }
    ]
  }
}
