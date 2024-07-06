import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//rutas de archivos
import { InicioRoutingModule } from './inicio-routing.module';

import { CardComponent } from './components/card/card.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Seccion1Component } from './pages/seccion1/seccion1.component';


@NgModule({
  declarations: [
    CardComponent,
    CarruselComponent,
    InicioComponent,
    Seccion1Component
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
