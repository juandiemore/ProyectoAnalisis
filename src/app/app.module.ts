import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { DetalleComponent } from './component/detalle/detalle.component';
import { ProductoComponent } from './component/producto/producto.component';

const appRoutes: Routes = [
 {path:'detalle' , component: DetalleComponent},
  {path:'producto' , component: ProductoComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
