import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componentes locales 
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//componentes angular
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule
  
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
