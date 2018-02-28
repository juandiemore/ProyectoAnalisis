import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pastel: any= [
  {id:1,receta:['manzana','huevo','harina','leche'],precio:1000, venta:2100},
  {id:2,receta:['limon','huevo','harina','leche'],precio:1000, venta:2100},
  {id:3,receta:['naranja','huevo','harina','leche'],precio:1000, venta:2100},
  {id:4,receta:['chocolate','huevo','harina','leche'],precio:1000, venta:2100}
  ]


}
