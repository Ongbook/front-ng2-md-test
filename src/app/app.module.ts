import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdMenuModule } from '@angular2-material/menu';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { HomeComponent } from './home/home.component';

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
    HomeComponent
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
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
