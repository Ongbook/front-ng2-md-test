import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
import { CausaComponent } from './causa/causa.component';
import { CadastreSeComponent } from './cadastre-se/cadastre-se.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, PreCadastroComponent, CausaComponent, CadastreSeComponent]
})
export class HomeModule { }
