import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MdToolbarModule } from '@angular2-material/toolbar';
import { FormPreCadastroComponent } from './shared/form-pre-cadastro/form-pre-cadastro.component';
import { MdInputModule } from '@angular2-material/input';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FormPreCadastroComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdInputModule.forRoot(),
    MdIconModule.forRoot(),
    MdCardModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
