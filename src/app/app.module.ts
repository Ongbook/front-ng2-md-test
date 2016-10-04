import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { Routers } from './app.routes';
import { AppComponent } from './app.component';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdMenuModule } from '@angular2-material/menu';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { HomeComponent } from './home/home.component';
import { PreCadastroComponent } from './home/pre-cadastro/pre-cadastro.component';
import { CausaComponent } from './home/causa/causa.component';
import { CadastreSeComponent } from './home/cadastre-se/cadastre-se.component';

import { FormPreCadastroComponent } from './shared/form-pre-cadastro/form-pre-cadastro.component';
import { ToolbarHomeComponent } from './shared/toolbar-home/toolbar-home.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDS4-ddlFHcGEp66eO2gsjWS0CvL-3YyIU",
  authDomain: "ongbook-9c3ec.firebaseapp.com",
  databaseURL: "https://ongbook-9c3ec.firebaseio.com",
  storageBucket: "ongbook-9c3ec.appspot.com",
  messagingSenderId: "496575609949"
};


@NgModule({
  declarations: [
    AppComponent,
    FormPreCadastroComponent,
    ToolbarHomeComponent,
    HomeComponent,
    PreCadastroComponent,
    CausaComponent,
    CadastreSeComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    MdMenuModule.forRoot(),
    MdToolbarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    Routers,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
