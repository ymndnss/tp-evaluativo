import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat'; // Es para el Cloud Firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Es para la Autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; //

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    BrowserAnimationsModule,
    
    // Inicializa firebase en nuestro proyecto
       AngularFireModule.initializeApp(environment.firebaseConfig),
       // Autentificación
       AngularFireAuthModule,
       // Storage -> BD de imágenes 
       AngularFireStorageModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
