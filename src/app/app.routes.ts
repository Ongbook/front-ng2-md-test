import { Route, Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { HomeRouter } from './home/home.router';
import { PreCadastroRouter } from './home/pre-cadastro/pre-cadastro.router';
import { CausaRouter } from './home/causa/causa.router';
import { CadastreSeRouter } from './home/cadastre-se/cadastre-se.router';


const indexRoute: Route[] = [
  {
    path: "",
    component: HomeComponent
  }
];

const appRoutes: Routes = [
...indexRoute,
...HomeRouter,
...PreCadastroRouter,
...CausaRouter,
...CadastreSeRouter,
];

export const Routers = RouterModule.forRoot(appRoutes);