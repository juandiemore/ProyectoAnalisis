import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

 
  ngOnInit() {
  }

  title = 'app';
  listo = true;
nombre:string = '';
constructor(){
	
setTimeout(() => {
	this.listo = true;
	},3000)
}
hacerAlgo(){
alert('hacer Algo!');	
}

Productos:any = [
{nombre:'pastel de manzana'     ,stock:1, Vendidos:10,  },
{nombre:'pastel de limon'       ,stock:15, Vendidos:1,  },
{nombre:'pastel de naranja' 	,stock:15, Vendidos:9,  },
{nombre:'pastel de chocolate'  	,stock:5, Vendidos:20,  },
];

meses:any = [
{mes:'enero' ,v:1},
{mes:'febrero',v:1},
{mes:'marzo',v:1},
{mes:'abril',v:1},
{mes:'mayo',v:1},
{mes:'junio',v:1},
{mes:'julio',v:1},
{mes:'agosto',v:1},
{mes:'septiembre',v:1},
{mes:'octubre',v:1},
{mes:'noviembre',v:1},
{mes:'diciembre',v:1},
];


tot(meses){
	let r=0
	for(var i of this.meses){
		console.log(i.v)
		r= r+i.v

	}
	return (r +" total");
}
a=0
b=0
comprar10(){
	this.a +=10;
}
comprar1(){
	this.a +=1;
}
evento(){
	this.b +=10;
}
eventofail(){
	if(this.Productos-this.b >0){
		this.b=0;
	}else 
	this.b -=10;
}
x=this.Productos[0].nombre;

}
